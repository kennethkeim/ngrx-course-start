import { routerReducer } from "@ngrx/router-store";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";

export interface AppState {}

export const routerFeatureKey = "router";

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};
