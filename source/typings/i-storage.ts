interface IStorage extends IStorageModel {
	on(name: string, subscriber: Function): void;
	notify(name: string, data: IStorage): void;
}