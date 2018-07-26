interface IColModel {
	order: number;
	label: string;
	filterable: boolean;
	filterType: string;
	filterOption: string;
	sortable: boolean;
	sortType: string;
	hidden: boolean;
	resizable: boolean;
	insensitive: boolean;
	fixed: boolean;
	key: string;
	alias: string;
	filterToolbarSettings: any;

	cellFormatter: Function;
	labelFormatter: Function;
	filterFormatter: Function;
	filterToolbarFormatter: Function;
	sortFormatter: Function;

	dependent: any[];
	_check: Function;
}