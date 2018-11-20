using System.ComponentModel.DataAnnotations;

namespace Grid.Models
{
	public enum LogicalOperationGridModel
	{
		[Display(Name = @"AND")]
		And,

		[Display(Name = @"OR")]
		Or
	}
}
