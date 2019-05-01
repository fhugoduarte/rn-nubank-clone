import React from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';

import styles from './styles';

function main() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

export default main;
