using Microsoft.EntityFrameworkCore;
using NetServer.Models;
using System;
using System.Text.RegularExpressions;

namespace NetServer.Data
{
	public class ApplicationDbContext : DbContext
	{
		public DbSet<SampleThing> SampleThings { get; set; }

		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
		{
			this.Database.Migrate();
		}
		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			DateTime date = DateTime.UtcNow;

			date = date.AddMonths(-10);

			for (int i = 1; i <= 105; i++)
			{
				if (i % 4 == 0) {
					date = date.AddDays(1);
				}

				builder.Entity<SampleThing>().HasData(new SampleThing
				{
					Id = i,
					Cost = Math.Round(i * 1.1, 2),
					Date = date,
					Created = date,
					Updated = date,
					IsActive = !(i % 3 == 0),
					Multiplier = (int)((1 / ((i + 1) * 1.1)) * 100),
					Title = Regex.Replace(Convert.ToBase64String(Guid.NewGuid().ToByteArray()), "[/+=]", "")
				});
			}
		}
	}
}
