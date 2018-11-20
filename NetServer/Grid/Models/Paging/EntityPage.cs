namespace Grid.Models
{
    public class EntityPage<T>
	{
		public int Page { get; set; }

		public T[] Data { get; set; }

		public int TotalRows { get; set; }

		public int TotalPages { get; set; }
	}
}
