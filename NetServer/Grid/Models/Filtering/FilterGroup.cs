namespace Grid.Models
{
    public class FilterGroup
    {
		public LogicalOperation GroupOperation { get; set; }

		public FilterRule[] Rules { get; set; }

		public FilterGroup[] Groups { get; set; }
	}
}
