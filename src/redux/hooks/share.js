/* eslint-disable import/prefer-default-export */
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shareActions from '../actions/share';
import {
  themeSelector,
} from '../selectors/share';

export const useShare = () => {
  const dispatch = useDispatch();
  const themeSettings = useSelector(themeSelector);
  const actions = useMemo(() => bindActionCreators(shareActions, dispatch), [dispatch]);

  return useMemo(() => ({
    themeSettings,
    actions,
  }), [themeSettings, actions]);
};
