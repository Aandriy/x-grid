namespace Grid.Models
{
    public class FilteredRequestModel : SortedPageRequestModel
	{
		public FilterGroup Filters { get; set; }
	}
}
