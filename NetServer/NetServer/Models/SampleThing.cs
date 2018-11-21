using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NetServer.Models
{
	public class SampleThing
	{
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public long Id { get; set; }
		[Required]
		public DateTime Date { get; set; }
		[Required]
		public DateTime Updated { get; set; }
		[Required]
		public DateTime Created { get; set; }
		[Required]
		public string Title { get; set; }
		[Required]
		public int Multiplier { get; set; }
		[Required]
		public double Cost { get; set; }
		[Required]
		public bool IsActive { get; set; }
	}
}
