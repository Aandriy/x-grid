using Grid.Models;
using Grid.Models.Request;
using Grid.Models.Sorting;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace Grid.Interfaces.Converters
{
	public interface IGridRequestConverter
	{
		FilteredRequestModel ConvertToRequestCriteria(GridRequestModel query, List<PropertyInfo> propertyInfoList);
	}
}
