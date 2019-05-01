import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import styles from './styles';

function main() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Menu />
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.title}>Saldo disponível</Text>
            <Text style={styles.description}>R$ 197.165.900,50</Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.annotation}>
              Transferência de R$100.000,00 recebida de Hugo Duarte hoje as
              09:00h
            </Text>
          </View>
        </View>
      </View>
      <Tabs />
    </View>
  );
}

export default main;
