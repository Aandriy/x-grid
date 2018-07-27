interface IViewModel extends IViewModelPartial {
	model: IViewModelPartial;
	on(name: string, subscriber: Function): void;
	notify(name: string, data: IViewModelPartial): void;
}