import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/Nubank_Logo.png';
import styles from './styles';

function header() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Hugo</Text>
      </View>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </View>
  );
}

export default header;
