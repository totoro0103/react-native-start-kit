import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'react-native-elements';

const ViewContainer = ({
  children, theme, style, ...props
}) => (
  <View style={[{ backgroundColor: theme.colors.white }, style]} {...props}>
    {children}
  </View>
);

export default withTheme(ViewContainer);
