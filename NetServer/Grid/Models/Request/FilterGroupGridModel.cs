namespace Grid.Models
{
    public class FilterGroupGridModel
    {
		public string GroupOp { get; set; }

		public FilterRuleGridModel[] Rules { get; set; }

		public FilterGroupGridModel[] Groups { get; set; }
	}
}
