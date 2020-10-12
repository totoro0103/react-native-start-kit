/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const getTheme = (state) => state.getIn(['share', 'themeSettings']);

export const themeSelector = createSelector(
  getTheme,
  (themeSetting) => themeSetting,
);
