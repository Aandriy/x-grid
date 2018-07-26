export default class FilterToolbarModel implements IFilterToolbarModel {
	formControlType = 'text';
	selectOptions = [];
	placeholder = '';
	onEnter = true;
	onKeydown = false;
	onChange = false;
	allowResetButton = true;
	allowSubmitButton = true;
	transformData?: Function; 

	constructor(settings) {
		$.extend(this, settings);
		if (!this.transformData) {
			if (this.formControlType === 'select') {
				this.transformData = ((data) => {
					let result;
					const selectOptions = this.selectOptions;
					if ($.isArray(data)) {
						result = [];
						data.forEach(function (key) {
							const item = selectOptions[key];
							if (item) {
								result.push(item.value);
							} else {
								result.push(key);
							}
						});
						if (!result.length) {
							return null;
						}
					} else {
						if (selectOptions[data]) {
							return selectOptions[data].value;
						}
					}
					
					return result;
				});
			}
		}
	}
};
