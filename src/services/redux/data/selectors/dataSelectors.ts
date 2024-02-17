import { RootState } from 'services/redux/store';

export const selectCities = (state: RootState) => state.data.cities;
