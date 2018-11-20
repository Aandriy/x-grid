using Grid.Interfaces.Converters;
using Grid.Models.Sorting;
using Grid.Models.Request;
using System.Collections.Generic;
using Grid.Interfaces;
using System.Reflection;
using Grid.Models;
using System.Linq;

namespace Grid.Implementation.Converters
{
	public class GridRequestConverter : IGridRequestConverter
	{
		public FilteredRequestModel ConvertToRequestCriteria(GridRequestModel query, List<PropertyInfo> propertyInfoList)
		{
			var result = new FilteredRequestModel();
			Dictionary<string, string> cols = new Dictionary<string, string>();

			propertyInfoList.ForEach(p =>
			{
				cols.Add(p.Name.ToLower(), p.Name);
			});

			_filterableColumns = cols;

			result.Page = query.Page;
			result.Rows = query.Rows;
			result.SortList = ConvertToSortList(query.Sort, cols);
			if (query.Filter != null) { 
				result.Filters = ConvertToFilters(query.Filter);
			}

			return result;
		}
		/**
		 * Filter
		 */
		private FilterGroup ConvertToFilters(FilterGroupGridModel filters)
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
		private LogicalOperation ParseLogicalOperation(string str)
		{
			return (LogicalOperation)EnumHelper<LogicalOperationGridModel>.GetValueFromName(str);
		}
		private FilterRule[] BuildRules(FilterRuleGridModel[] rules)
		{
			var list = new List<FilterRule>();

			for (var i = 0; i < rules.Length; i++)
			{
				var rule = BuildRule(rules[i]);
				if (rule != null) {
					list.Add(rule);
				}
			}
			if (list.Any()) {
				return list.ToArray();
			}

			return null;
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
		private FilterRule BuildRule(FilterRuleGridModel filterRuleModel)
		{
			var name = GetOriginPropertyName(filterRuleModel.Field).ToLower();
			if (_filterableColumns.ContainsKey(name))
			{
				return new FilterRule
				{
					ComparisonOperator = ParseComparisonOperator(filterRuleModel.Op),
					Data = filterRuleModel.Data,
					FieldName = _filterableColumns[name]
				};
			}
			else
			{
				// To Do "optional throw error"
				return null;
			}

			
		}
		private ComparisonOperator ParseComparisonOperator(string str)
		{
			return (ComparisonOperator)EnumHelper<ComparisonOperatorGridModel>.GetValueFromName(str);
		}

		/**
		 * Sorting
		 */ 
		private List<SortRule> ConvertToSortList(List<SortRuleGridModel> sortRules, Dictionary<string, string> cols)
		{
			var result = new List<SortRule>();
			sortRules.ForEach(p =>
			{
				var name = GetSearchPropertyName(p.By).ToLower();
				if (cols.ContainsKey(name))
				{
					result.Add(new SortRule()
					{
						By = cols[name],
						Order = p.Order.ToLower() == "asc" ? SortOrder.Asc : SortOrder.Desc
					});
				}
				else
				{
					// To Do "optional throw error"
				}
			});
			return result;
		}
		private Dictionary<string, string> _filterableColumns;

		private readonly Dictionary<string, string> _searchProperties = new Dictionary<string, string>
		{
			{"time", "timestampdate"},
			{"activityid", "activityidtext"},
		};

		private readonly Dictionary<string, string> _originProperties = new Dictionary<string, string>
		{
			{"applicationname", "appname"},
			{"time", "timestamp"}
		};

		private string GetSearchPropertyName(string property)
		{
			return _searchProperties.ValueOrDefault(property.ToLower()) ?? GetOriginPropertyName(property);
		}

		private string GetOriginPropertyName(string property)
		{
			return _originProperties.ValueOrDefault(property.ToLower()) ?? property;
		}
	}

}
