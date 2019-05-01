import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default function menu() {
  return (
    <ScrollView
      contentContainerStyle={styles.containerContent}
      style={styles.container}
    >
      <View style={styles.code}>
        <QRCode
          value="https://github.com/fhugoduarte"
          size={80}
          bgColor="#8B10AE"
          fgColor="#FFF"
        />
      </View>
      <View style={styles.nav}>
        <View style={styles.navItem}>
          <Icon name="help-outline" size={20} color="#FFF" />
          <Text style={styles.navText}>Me ajuda</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="person-outline" size={20} color="#FFF" />
          <Text style={styles.navText}>Perfil</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="credit-card" size={20} color="#FFF" />
          <Text style={styles.navText}>Configurar cartão</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="smartphone" size={20} color="#FFF" />
          <Text style={styles.navText}>Configurações do app</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>SAIR DO APP </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
