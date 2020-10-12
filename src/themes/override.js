import colors from './colors';
import colorsDark from './colorsDark';

export const defaultTheme = {
  colors,
  Button: {
    containerStyle: {
      width: 200,
    },
    titleStyle: {
      textTransform: 'uppercase',
    },

  },
  ButtonGroup: {
    buttonContainerStyle: {
      backgroundColor: colors.white,
    },
    textStyle: {
      color: colors.primary,
    },
    selectedButtonStyle: {
      backgroundColor: colors.primary,
    },
    selectedTextStyle: {
      color: colors.white,
    },
  },
};

export const darkTheme = {
  colors: colorsDark,
  Button: {
    containerStyle: {
      width: 200,
    },
    titleStyle: {
      textTransform: 'uppercase',
    },
  },
  ButtonGroup: {
    buttonContainerStyle: {
      backgroundColor: colors.black,
    },
    textStyle: {
      color: colors.white,
    },
    selectedButtonStyle: {
      backgroundColor: colors.white,
    },
    selectedTextStyle: {
      color: colors.black,
    },
  },
};
