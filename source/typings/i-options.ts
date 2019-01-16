
interface IOptions extends IOptionsProcessSettings, IOptionsBuildInfrastructure {
    label: string;
    beforeRequest: Function[];
    afterResponse: Function[];
    paginationSelector: string;
    ajaxType: string;
    filterToolbarGroupOp: string;
    url: string;
    multiSorting: boolean;
    data?: object[];
}