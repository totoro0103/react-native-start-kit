import { StyleSheet } from 'react-native';
import appStyles from '../themes/appStyles';
import colors from '../themes/colors';
import { fontFamily, fontSize } from '../constant/common';

export default StyleSheet.create({
  ...appStyles,
  viewNetworkErr: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRetry: {
    width: 150,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRetry: {
    color: colors.black,
    fontWeight: 'bold',
  },
  textItemMenu: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular,
    color: colors.primary,
    marginLeft: 12,
  },
});
