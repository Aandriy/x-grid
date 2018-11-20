using Grid.Implementation;
using Grid.Interfaces;
using Grid.Interfaces.Converters;
using Grid.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Grid.Implementation
{
	public class GridService : IGridService
	{
		private readonly IGridFilteredModelBuilder _requestBuilder;
		private readonly IExpressionBuilder _expressionBuilder;
		private readonly IGridRequestConverter _gridRequestConvertor;

		public GridService(IGridFilteredModelBuilder requestBuilder, IExpressionBuilder expressionBuilder,  IGridRequestConverter gridRequestConvertor)
		{
			_requestBuilder = requestBuilder;
			_expressionBuilder = expressionBuilder;
			_gridRequestConvertor = gridRequestConvertor;

		}
		public EntityPage<TResult> Get<T, TResult>(GridRequestModel query, IQueryable<T> items, Func<T, TResult> mapper)
		{
			List<PropertyInfo> props = typeof(T).GetProperties().ToList();
			var criteria = _gridRequestConvertor.ConvertToRequestCriteria(query, props);
			var sortList = criteria.SortList;
			var predicate = criteria.Filters == null
				? p => true
				: _expressionBuilder.BuildExpression<T>(criteria.Filters);

			var t = items.Where(predicate);

			if (sortList.Any())
			{
				var firstItem = sortList.First();

				t = t.OrderBy(firstItem.By, firstItem.Order);

				sortList.Skip(1).ToList().ForEach(p =>
				{
					t = t.ThenBy(p.By, p.Order);
				});
			}

			var result = t.ConvertToEntityPage(criteria.Page, criteria.Rows, mapper);
			return result;
		}
	}
}
