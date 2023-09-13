import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ImageIcon from '../assets/images';
import Header from '../components/Header';

interface Props {}

const SubscribeScreenComponent = (props: Props) => {
  const {} = props;

  const [email, setEmail] = React.useState('');

  const onPressContinue = () => {
    Alert.alert('Subscribe', 'You have subscribed to our newsletter');
  };

  const isEnable = !!email;

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton title="Subscribe" />
      <Image source={ImageIcon.ic_logo} style={styles.icLogo} />

      <Text style={styles.txt}>
        {`Subscribe to our newsletter for our\nlatest delicious recipes!`}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Type your email"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={[styles.btn, !isEnable && styles.btnDisable]}
        onPress={onPressContinue}
        activeOpacity={0.8}
        disabled={!isEnable}>
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
    marginTop: 24,
  },
  txt: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  input: {
    marginTop: 24,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    height: 48,
    width: Dimensions.get('window').width - 48,
    padding: 0,
    paddingHorizontal: 16,
  },
  btn: {
    width: Dimensions.get('window').width - 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  btnDisable: {
    opacity: 0.3,
  },
  txtBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

const SubscribeScreen = React.memo(SubscribeScreenComponent);

export default SubscribeScreen;
