interface IStorageModel {
	$box: null | JQuery<HTMLElement>,
	$headTable: null | JQuery<HTMLElement>,
	$gridTable: null | JQuery<HTMLElement>,
	$headLabels: null | JQuery<HTMLElement>,
	$paginationBox: null | JQuery<HTMLElement>,
	$filterToolbarItems: null | JQuery<HTMLElement>,
	query: null | IQueryModel,
	scrollbarWidth: number,
	colModels: IColModel[],
	colModelsDictionary: { [key: string]: IColModel };
	filter: null,
	data: IRawData[],
	processedData: any[]
}