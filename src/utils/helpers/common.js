/* eslint-disable import/prefer-default-export */
import { THEMES } from '../../constant/common';

export const handleSetTheme = (themeSetting, scheme) => {
  if (!themeSetting || themeSetting === THEMES.SYSTEM) {
    return scheme;
  }
  return themeSetting;
};
