namespace Grid.Models
{
	public class FilterRule
	{
		public string Data { get; set; }

		public ComparisonOperator ComparisonOperator { get; set; }

		public string FieldName { get; set; }
	}
}
