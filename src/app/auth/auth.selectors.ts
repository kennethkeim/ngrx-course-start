import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authFeatureKey, AuthState } from "./reducers";

export const authSelector = createFeatureSelector<AuthState>(authFeatureKey);

export const isLoggedIn = createSelector(authSelector, (auth) =>
  Boolean(auth.user)
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  (isLoggedIn) => !isLoggedIn
);
