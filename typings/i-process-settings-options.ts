interface IProcessSettingsOptions {
	colModels: IColModel[];
	filterToolbar: boolean;
	sortBy: string | ISortBy[];
	rows?: number;
}