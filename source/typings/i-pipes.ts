type TPipes =  | 'int'
	| 'integer'
	| 'float'
	| 'number'
	| 'numeric'
	| 'string'
	| 'boolean';


interface IPipes {
	int(value: any, rowData?, colModel?): number;
	integer(value: any, rowData, colModel): number;
	float(value: any, rowData, colModel): number;
	number(value: any, rowData, colModel): number;
	numeric(value: any, rowData, colModel): number;
	string(value: any, rowData, colModel): string;
	boolean(value: any, rowData, colModel): boolean;
	getByType(type?: TPipes): Function;
}