export default class DisplayModel implements IDispalyModel {
	data: IRawData[];
	page: number = 1;
	totalPages: number = 0;
	totalRows: number = 0;

	constructor(dataToDisplay: IRawData[] = [], page: number = 1, totalPages: number = 0, totalRows: number = 0) {
		this.data = dataToDisplay;
		if (page > 0) {
			this.page = page;
		}
		this.totalPages = totalPages;
		this.totalRows = totalRows;
	}
}