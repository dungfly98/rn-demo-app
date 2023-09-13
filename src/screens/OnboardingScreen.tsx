import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImageIcon from '../assets/images';
import Header from '../components/Header';
import {navigate} from '../navigators/ServiceNavigation';

interface Props {}

const Onboarding = (props: Props) => {
  const {} = props;

  const onPressContinue = () => {
    navigate('SubscribeScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Welcome" />

      <Image source={ImageIcon.ic_logo} style={styles.icLogo} />
      <Text style={styles.txt}>Welcome to the React Native course</Text>

      <View style={styles.flexOne} />

      <TouchableOpacity
        style={styles.btn}
        onPress={onPressContinue}
        activeOpacity={0.8}>
        <Text style={styles.txtBtn}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  icLogo: {
    width: 100,
    height: 100,
    marginTop: 120,
  },
  txt: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
    fontWeight: 'bold',
  },
  flexOne: {
    flex: 1,
  },
  btn: {
    width: 280,
    height: 48,
    borderRadius: 8,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

const OnboardingScreen = React.memo(Onboarding);

export default OnboardingScreen;
