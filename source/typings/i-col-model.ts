type TSortType = | TPipes | Function;

type TFilterType = | TPipes | Function;

interface IColModel {
	alias: string;
	filterAlias?: string;
	filterOption: TOperatorType;
	filterToolbarSettings: IFilterToolbarModel;
	filterType: TFilterType;
	filterable: boolean;
	fixed: boolean;
	hidden: boolean;
	insensitive: boolean;
	key: string;
	label: string;
	order: number;
	resizable: boolean;
	sortType: TSortType;
	sortable: boolean;
	width: number;

	cellFormatter: Function;
	filterFormatter: Function;
	filterToolbarFormatter: Function;
	filterRuleFormatter?(rule: IFilterModel, rules: IFilterModel[], colModel: IColModel, createRule: Function ): null | IFilterModel;
	afterFilterToolbarFormatter?: Function;
	labelFormatter: Function;
	sortFormatter: Function;

	dependent: any[];
	_check: Function;
}