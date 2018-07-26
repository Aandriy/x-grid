interface IFilterToolbarModel {
	formControlType: string;
	selectOptions: any[];
	placeholder: string;
	onEnter: boolean;
	onKeydown: boolean;
	onChange: boolean;
	allowResetButton: boolean;
	allowSubmitButton: boolean;
	transformData?: Function;
}