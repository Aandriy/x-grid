interface IOptionsProcessSettings {
	colModels: IColModel[];
	filterToolbar: boolean;
	sortBy?: string | ISortBy[];
	rows?: number;
}