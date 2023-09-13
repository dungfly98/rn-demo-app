import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OnboardingScreen from '../screens/OnboardingScreen';
import SubscribeScreen from '../screens/SubscribeScreen';
import {navigationRef} from './ServiceNavigation';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="OnboardingScreen">
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="SubscribeScreen" component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

const StackNavigator = ({children}: any) => {
  return (
    <NavigationContainer ref={navigationRef}>
      {children}
      <MainStack />
    </NavigationContainer>
  );
};

export default StackNavigator;
