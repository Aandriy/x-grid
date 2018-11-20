using Grid.Models;
using System;
using System.Linq.Expressions;

namespace Grid.Interfaces
{
	public interface IExpressionBuilder
	{
		Expression<Func<T, bool>> BuildExpression<T>(FilterGroup filters);
	}
}
