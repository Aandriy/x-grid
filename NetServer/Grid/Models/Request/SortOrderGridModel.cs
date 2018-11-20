using System.ComponentModel.DataAnnotations;

namespace Grid.Models
{
	public enum SortOrderGridModel
	{
		[Display(Name = @"asc")]
		Asc = 0,

		[Display(Name = @"desc")]
		Desc = 1
	}
}
