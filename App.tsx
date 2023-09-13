import React from 'react';
import {Platform, StatusBar} from 'react-native';
import StackNavigator from './src/navigators/RootNavigator';

if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setTranslucent(true);
}
StatusBar.setBarStyle('dark-content');

const AppComponent = (props: any) => {
  return <StackNavigator>{props?.children}</StackNavigator>;
};

const App = React.memo(AppComponent);

export default App;
