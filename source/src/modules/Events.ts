export default class Events implements IEvents {
    storage: IStorage;

    constructor(storage) {
        this.storage = storage;
    }

    public triggerAfterDisplayingGridData (data: IRawData[]): void{
        this._trigger('after-displaying-grid-data.xg', [data])
    }
    
    private _trigger(event: string, data? :any): void {
        this.storage.$box.trigger(event, data)
    }
}