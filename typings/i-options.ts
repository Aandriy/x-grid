interface IOptions {
    label: string;
    beforeRequest: Function[],
    afterResponse: Function[],
    sortBy: string | ISortBy[],
    paginationSelector: string,
    ajaxType: string,
    filterToolbarGroupOp: string,
    url: string,
    multiSorting: boolean,
    filterToolbar: boolean,
    data?: object[],
}