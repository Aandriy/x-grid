using Grid.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Grid.Interfaces
{
	public interface IGridService
	{
		EntityPage<TResult> Get<T, TResult>(GridRequestModel query, IQueryable<T> items, Func<T, TResult> mapper);

	}
}
