using Grid.Models.Request;
using System.Collections.Generic;

namespace Grid.Models
{
	public class GridRequestModel
	{
		public int Page { get; set; }

		public int Rows { get; set; }

		public string Sidx { get; set; }

		public string Sord { get; set; }

		public string Filters { get; set; }

		public FilterGroupGridModel Filter { get; set; }

		public List<SortRuleGridModel> Sort { get; set; }

	}
}
