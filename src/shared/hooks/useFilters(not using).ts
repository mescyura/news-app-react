import { useState } from 'react';
import { IFilters } from '../interfaces';

export const useFilter = (initialFilter: IFilters) => {
	const [filters, setFilters] = useState<IFilters>(initialFilter);

	const changeFilter = (key: string, value: string | number | null) => {
		setFilters(prev => {
			return { ...prev, [key]: value };
		});
	};

	return { filters, changeFilter };
};
