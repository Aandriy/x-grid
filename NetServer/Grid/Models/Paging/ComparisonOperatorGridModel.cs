using System.ComponentModel.DataAnnotations;

namespace Grid.Models
{
	public enum ComparisonOperatorGridModel
	{
		[Display(Name = @"eq")]
		Equals = 0,

		[Display(Name = @"cn")]
		Contains = 1,

		[Display(Name = @"le")]
		LessThanOrEqual = 2,

		[Display(Name = @"ge")]
		GreaterThanOrEqual = 3
	}
}
