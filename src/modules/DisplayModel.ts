export default class DisplayModel implements IDispalyModel {
	data: IRawData[];
	page = 1;
	totalPages: number;
	totalRows: number;

	constructor(dataToDisplay: IRawData[], page: number, totalPages: number, totalRows: number) {
		this.data = dataToDisplay;
		if (page > 0) {
			this.page = page;
		}
		this.totalPages = totalPages;
		this.totalRows = totalRows;
	}
}