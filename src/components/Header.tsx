import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import ImageIcon from '../assets/images';
import {goBack} from '../navigators/ServiceNavigation';

interface Props {
  title: string;
  showBackButton?: boolean;
}

const HeaderComponent = (props: Props) => {
  const {title, showBackButton} = props;

  const onBack = () => {
    goBack();
  };

  return (
    <View style={styles.container}>
      {showBackButton ? (
        <Pressable onPress={onBack}>
          <Image source={ImageIcon.ic_back} style={styles.icBack} />
        </Pressable>
      ) : (
        <View style={styles.icBack} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C4C4C4',
    paddingBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  icBack: {
    width: 24,
    height: 24,
  },
});

const Header = React.memo(HeaderComponent);

export default Header;
