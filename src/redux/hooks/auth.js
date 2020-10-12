/* eslint-disable import/prefer-default-export */
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/auth';
import {
  signInSelector,
} from '../selectors/auth';

export const useAuth = () => {
  const dispatch = useDispatch();
  const signIn = useSelector(signInSelector);
  const actions = useMemo(() => bindActionCreators(authActions, dispatch), [dispatch]);

  return useMemo(() => ({
    signIn,
    actions,
  }), [signIn, actions]);
};
