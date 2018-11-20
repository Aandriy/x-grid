
using Grid.Interfaces;
using Grid.Models;
using Grid.Models.Sorting;
using Newtonsoft.Json;

namespace Grid.Implementation
{
    public class GridFilteredModelBuilder : IGridFilteredModelBuilder
	{
		public T BuildRequestCriteria<T>(GridRequestModel query) where T : FilteredRequestModel, new()
		{
			var result = new T();
			result.Page = query.Page;
			result.Rows = query.Rows;
			
			if (query.Filters != null)
			{
				var filters = JsonConvert.DeserializeObject<FilterGroupGridModel>(query.Filters);
				var filterGroup = BuildFilterGroup(filters);
				result.Filters = filterGroup;
			}

			return result;
		}

		private FilterGroup BuildFilterGroup(FilterGroupGridModel filters)
		{
			var result = new FilterGroup();
			result.GroupOperation = ParseLogicalOperation(filters.GroupOp);
			result.Rules = BuildRules(filters.Rules);
			if (filters.Groups == null)
			{
				return result;
			}

			result.Groups = new FilterGroup[filters.Groups.Length];
			for (var i = 0; i < filters.Groups.Length; i++)
			{
				result.Groups[i] = BuildFilterGroup(filters.Groups[i]);
			}

			return result;
		}

		private FilterRule[] BuildRules(FilterRuleGridModel[] rules)
		{
			var result = new FilterRule[rules.Length];

			for (var i = 0; i < rules.Length; i++)
			{
				result[i] = BuildRule(rules[i]);
			}

			return result;
		}

		private FilterRule BuildRule(FilterRuleGridModel filterRuleModel)
		{
			return new FilterRule
			{
				ComparisonOperator = ParseComparisonOperator(filterRuleModel.Op),
				Data = filterRuleModel.Data,
				FieldName = filterRuleModel.Field
			};
		}

		private SortOrder ParseSortOrder(string str)
		{
			return (SortOrder)EnumHelper<SortOrderGridModel>.GetValueFromName(str);
		}

		private ComparisonOperator ParseComparisonOperator(string str)
		{
			return (ComparisonOperator)EnumHelper<ComparisonOperatorGridModel>.GetValueFromName(str);
		}

		private LogicalOperation ParseLogicalOperation(string str)
		{
			return (LogicalOperation)EnumHelper<LogicalOperationGridModel>.GetValueFromName(str);
		}
	}
}

