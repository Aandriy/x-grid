using Grid.Interfaces;
using Grid.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq.Expressions;
using System.Reflection;

namespace Grid.Implementation
{
	public class ExpressionBuilder : IExpressionBuilder
	{

		private static readonly Dictionary<LogicalOperation, Func<Expression, Expression, BinaryExpression>> CombineExpressionsMapping =
			new Dictionary<LogicalOperation, Func<Expression, Expression, BinaryExpression>>
		{
			{
				LogicalOperation.And, Expression.And
			},
			{
				LogicalOperation.Or, Expression.Or
			}
		};

		public Expression<Func<T, bool>> BuildExpression<T>(FilterGroup filters)
		{
			var parameter = Expression.Parameter(typeof(T));
			return BuildExpression<T>(filters, parameter) ?? (p => true);
		}

		private Expression<Func<T, bool>> BuildExpression<T>(FilterGroup filters, ParameterExpression parameter)
		{
			Expression<Func<T, bool>> resultExpression = null;
			var combineExpression = CombineExpressionsMapping[filters.GroupOperation];
			foreach (var filterRule in filters.Rules)
			{
				var exp = BuildPropertyExpression<T>(filterRule.FieldName, filterRule.ComparisonOperator, filterRule.Data, parameter);

				if (resultExpression == null)
				{
					resultExpression = exp;
				}

				resultExpression = Expression.Lambda<Func<T, bool>>(
					combineExpression(resultExpression.Body, exp.Body),
					parameter);
			}

			if (filters.Groups != null)
			{
				foreach (var filterGroup in filters.Groups)
				{
					var exp = BuildExpression<T>(filterGroup, parameter);

					if (resultExpression == null)
					{
						resultExpression = exp;
					}

					resultExpression = Expression.Lambda<Func<T, bool>>(
						combineExpression(resultExpression.Body, exp.Body),
						parameter);
				}
			}

			return resultExpression;
		}

		private Expression<Func<T, bool>> BuildPropertyExpression<T>(
			string propertyName,
			ComparisonOperator operation,
			string value,
			ParameterExpression parameter)
		{
			var propertyExp = Expression.Property(parameter, propertyName);
			var propertyType = ((PropertyInfo)propertyExp.Member).PropertyType;

			if (propertyType == typeof(DateTime))
			{
				return GetDateTimePropertyEqualsExpresssion<T>(propertyName, value, parameter);
			}

			MethodInfo filterMethod = typeof(string).GetMethod(operation.ToString(), new[] { typeof(string) });
			var valueParameter = Expression.Constant(value, typeof(string));
			var methodExp = Expression.Call(propertyExp, filterMethod, valueParameter);
			return Expression.Lambda<Func<T, bool>>(methodExp, parameter);
		}

		private Expression<Func<T, bool>> GetDateTimePropertyEqualsExpresssion<T>(string propertyName, string value, ParameterExpression parameter)
		{
			try
			{
				var propertyExp = Expression.Convert(Expression.Property(parameter, propertyName), typeof(DateTime));
				var dateValue = DateTime.ParseExact(value, "MM/dd/yyyy", CultureInfo.InvariantCulture).Date;
				var valueParameter = Expression.Constant(dateValue, typeof(DateTime));
				var methodExp = Expression.Equal(propertyExp, valueParameter);

				return Expression.Lambda<Func<T, bool>>(methodExp, parameter);
			}
			catch (FormatException)
			{
				return Expression.Lambda<Func<T, bool>>(Expression.Constant(false), parameter);
			}
		}
	}
}
