using Grid.Models;

namespace Grid.Interfaces
{
    public interface IGridFilteredModelBuilder
    {
		T BuildRequestCriteria<T>(GridRequestModel query) where T : FilteredRequestModel, new();
	}
}
