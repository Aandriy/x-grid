using Grid.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Grid.Implementation
{
	public static class QueryableExtensions
    {
		public static IQueryable<T> OrderBy<T>(this IQueryable<T> query, string columnName, SortOrder order)
		{
			var methodName = string.Format("OrderBy{0}", order == SortOrder.Asc ? string.Empty : "Descending");
			return Sort(query, methodName, columnName);
		}

		public static IQueryable<T> ThenBy<T>(this IQueryable<T> query, string columnName, SortOrder order)
		{
			var methodName = string.Format("ThenBy{0}", order == SortOrder.Asc ? string.Empty : "Descending");
			return Sort(query, methodName, columnName);
		}

		private static IQueryable<T> Sort<T>(IQueryable<T> query, string methodName, string columnName)
		{
			var parameter = Expression.Parameter(query.ElementType);
			var memberAccess = columnName
				.Split('.')
				.Aggregate<string, MemberExpression>(null, (current, property) => Expression.Property(current ?? (parameter as Expression), property));
			var orderByLambda = Expression.Lambda(memberAccess, parameter);
			var result = Expression.Call(
				typeof(Queryable),
				methodName,
				new[] { query.ElementType, memberAccess.Type },
				query.Expression,
				Expression.Quote(orderByLambda));

			return query.Provider.CreateQuery<T>(result);
		}

		public static EntityPage<TResult> ConvertToEntityPage<T, TResult>(this IQueryable<T> query, int pageNumber, int pageSize, Func<T, TResult> resultSelector)
		{
			var totalItemCount = query.Count();

			var page = query
				.Skip(pageNumber * pageSize - pageSize)
				.Take(pageSize);

			return page.ConvertToEntityPage(pageNumber, pageSize, totalItemCount, resultSelector);
		}

		public static EntityPage<TResult> ConvertToEntityPage<T, TResult>(this IQueryable<T> page, int pageNumber, int pageSize, int totalRecords, Func<T, TResult> resultSelector)
		{
			int totalPageCount = 0;

			if (pageSize > 0)
			{
				totalPageCount = (int)Math.Ceiling((double)totalRecords / pageSize);
			}

			int pageNum = pageNumber;

			if (totalPageCount == 0)
			{
				pageNum = 1;
			}
			else if (pageNumber > totalPageCount)
			{
				pageNum = totalPageCount;
			}

			return new EntityPage<TResult>
			{
				Page = pageNum,
				TotalPages = totalPageCount,
				TotalRows = totalRecords,
				Data = page
				.Select(resultSelector)
				.ToArray()
			};
		}
		public static TV ValueOrDefault<TK, TV>(this IDictionary<TK, TV> dictionary, TK key)
			where TV : class
		{
			TV ret;
			dictionary.TryGetValue(key, out ret);
			return ret;
		}
	}
}
