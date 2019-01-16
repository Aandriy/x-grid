const defaults: IOptionsBuildInfrastructure = {
    theadClass: 'table-grid-thead',
    tbodyClass: 'table-grid-tbody',
    firstBtnTemplate: '<span class="btn btn-outline-secondary">&#171;</span>',
    lastBtnTemplate: '<span class="btn btn-outline-secondary">&#187;</span>',
    prevBtnTemplate: '<span class="btn btn-outline-secondary">&#8249;</span>',
    nextBtnTemplate: '<span class="btn btn-outline-secondary">&#8250;</span>',
    currentPageTemplate: '<input type="text" class="form-control" />',
    paginationTemplate: `<div class="Xgrid-paggination input-group input-group-sm">
			<div class="input-group-prepend" >{firstBtnTemplate}{prevBtnTemplate}<span class="input-group-text"> Page </span></div>
				{currentPageTemplate}
				<div class="input-group-prepend" ><span class="input-group-text"> of <span class="Xgrid-total-pages"></span></span>{nextBtnTemplate}{lastBtnTemplate}</div>
			</div>`
};

export default defaults;