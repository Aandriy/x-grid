interface IEvents {
	triggerAfterDisplayingGridData(data: IRawData[]): void;
	triggerAfterDisplayingGridHeader(data: JQuery<HTMLElement>): void;
}