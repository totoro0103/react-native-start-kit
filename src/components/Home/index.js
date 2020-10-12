import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';
import { ButtonGroup, withTheme } from 'react-native-elements';
import { Appearance } from 'react-native-appearance';
import { useTranslation } from 'react-i18next';
import Overlay from '../common/Overlay';
import useOverlay from '../../utils/hooks/useOverlay';
import { THEMES } from '../../constant/common';
import { useShare } from '../../redux/hooks/share';
import { handleSetTheme } from '../../utils/helpers/common';
import { defaultTheme, darkTheme } from '../../themes/override';
import storage from '../../utils/helpers/storage';
import ViewContainer from '../common/ViewContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Home = ({ updateTheme }) => {
  const [showAlert] = useOverlay();
  const { actions, themeSettings } = useShare();
  const { t, i18n } = useTranslation();
  const buttons = [THEMES.SYSTEM, THEMES.DARK, THEMES.LIGHT];
  const languageButtons = ['en', 'fr'];

  const onPressThemeSetting = (selectedIdx) => {
    actions.setTheme(buttons[selectedIdx]);
    const themeMode = handleSetTheme(buttons[selectedIdx], Appearance.getColorScheme());
    storage.set(storage.keys.THEME_MODE, buttons[selectedIdx]);
    if (themeMode === THEMES.DARK) {
      updateTheme(darkTheme);
    } else {
      updateTheme(defaultTheme);
    }
  };

  return (
    <ViewContainer style={styles.container}>
      <View>
        <Button
          onPress={() => {
            showAlert(<Overlay />);
          }}
          title="Show Overlay"
        />
        <ButtonGroup
          onPress={onPressThemeSetting}
          selectedIndex={buttons.indexOf(themeSettings)}
          buttons={buttons}
        />
        <ButtonGroup
          onPress={((selectedId) => i18n.changeLanguage(languageButtons[selectedId]))}
          buttons={languageButtons}
        />
        <Text>{t('Welcome to React')}</Text>
      </View>
    </ViewContainer>
  );
};

export default withTheme(Home);
