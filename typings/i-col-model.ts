interface IColModel {
	alias: string;
	filterOption: string;
	filterToolbarSettings: any;
	filterType: string;
	filterable: boolean;
	fixed: boolean;
	hidden: boolean;
	insensitive: boolean;
	key: string;
	label: string;
	order: number;
	resizable: boolean;
	sortType: string;
	sortable: boolean;
	width: number;

	cellFormatter: Function;
	filterFormatter: Function;
	filterToolbarFormatter: Function;
	labelFormatter: Function;
	sortFormatter: Function;

	dependent: any[];
	_check: Function;
}