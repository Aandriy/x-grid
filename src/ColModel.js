class ColModel {
    constructor(model, order) {
        this.label = '';
        this.hidden = false;
        this.resizable = false;
        this.sortable = false;
        this.order = order;
        $.extend(this, model);
    }

    labelFormatter() {
        return this.label;
    };
    cellFormatter($td, value, rowData, data) {
        return '<div class="ellipsis">' + value + '</div>';
    }
};

export default ColModel;