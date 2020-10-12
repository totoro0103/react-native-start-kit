/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const getSignIn = (state) => state.getIn(['auth', 'signIn']);

export const signInSelector = createSelector(
  getSignIn,
  (signIn) => signIn.toJS(),
);
