class FilterToolbarModel {
	constructor(settings) {
		this.formControlType = 'text';
		this.selectOptions = [];
		this.placeholder = '';
		this.onEnter = true;
		this.onKeydown = false;
		this.onChange = false;
		this.allowResetButton = true;
		this.allowSubmitButton = true;
		$.extend(this, settings);
		if (!this.transformData) {
			if (this.formControlType === 'select') {
				this.transformData = ((data) => {
					let result;
					const selectOptions = this.selectOptions;
					if ($.isArray(data)) {
						result = [];
						data.forEach(function (key) {
							const item = selectOptions[key]; selectOptions
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
export default FilterToolbarModel;