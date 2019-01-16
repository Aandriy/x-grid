(function(defaults){
    defaults.paginationTemplate = `<div class="Xgrid-paggination input-group input-group-sm">
    <div class="input-group-prepend" >{firstBtnTemplate}{prevBtnTemplate}<span class="input-group-text"> PAGE </span></div>
        {currentPageTemplate}
        <div class="input-group-prepend" ><span class="input-group-text"> OF <span class="Xgrid-total-pages"></span></span>{nextBtnTemplate}{lastBtnTemplate}</div>
    </div>`
})($.fn.Xgrid.defaults);
