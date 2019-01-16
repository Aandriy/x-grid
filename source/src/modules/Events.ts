export const CUSTOM_EVENTS = {
    'AFTER_DISPLAYING_GRID_DATA': 'after-displaying-grid-data.xg'
};

export default class Events implements IEvents {
    storage: IStorage;

    constructor(storage) {
        this.storage = storage;
    }

    public triggerAfterDisplayingGridData (data: IRawData[]): void{
        this._trigger(CUSTOM_EVENTS.AFTER_DISPLAYING_GRID_DATA, [data])
    }
    
    private _trigger(event: string, data? :any): void {
        this.storage.$box.trigger(event, data)
    }
}