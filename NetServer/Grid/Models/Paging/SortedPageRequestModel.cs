using Grid.Models.Sorting;
using System.Collections.Generic;

namespace Grid.Models
{
	public class SortedPageRequestModel : PageRequestModel
	{
		public List<SortRule> SortList { get; set; }
	}
}
