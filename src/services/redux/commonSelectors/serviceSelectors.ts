import { RootState } from '../store';

export const selectIsAppLoaded = (state: RootState) =>
  state.authUser.isAppLoaded;

export const selectErrorData = (state: RootState) => state.data.errorData;

export const selectIsDataLoading = (state: RootState) => state.data.isLoading;
