export const CUSTOM_EVENTS = {
    'AFTER_DISPLAYING_GRID_DATA': 'after-displaying-grid-data.xg',
    'AFTER_DISPLAYING_GRID_HEDER': 'after-displaying-grid-header.xg',
};

export default class Events implements IEvents {
    storage: IStorage;

    constructor(storage) {
        this.storage = storage;
    }

    public triggerAfterDisplayingGridData (data: IRawData[]): void{
        this._trigger(CUSTOM_EVENTS.AFTER_DISPLAYING_GRID_DATA, [data])
    }

    public triggerAfterDisplayingGridHeader (data: JQuery<HTMLElement>): void{
        this._trigger(CUSTOM_EVENTS.AFTER_DISPLAYING_GRID_HEDER, [data])
    }
    
    private _trigger(event: string, data? :any): void {
        this.storage.$box.trigger(event, data)
    }
}