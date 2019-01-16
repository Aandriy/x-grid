import buildInfrastructureDefaults from './BuildInfrastructure.defaults';

const defaults = {
    beforeRequest: [],
    afterResponse: [],
    sortBy: [],
    paginationSelector: '',
    ajaxType: 'POST',
    filterToolbarGroupOp: 'AND',
    url: '',
    multiSorting: false,
    filterToolbar: false,
    ...buildInfrastructureDefaults
}

export default (options = {}): IOptions => {
    return {
        ...JSON.parse(JSON.stringify(defaults)),
        ...options
    };
};