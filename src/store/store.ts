import { configureStore } from '@reduxjs/toolkit';

import stateModalLoadingLanguage from './stateLoadingLanguage';

export const store = configureStore({
	reducer: {
		stateModalLoadingLanguage: stateModalLoadingLanguage,
		},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch