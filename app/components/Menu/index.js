import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

function menu({ translateY }) {
  return (
    <Animated.ScrollView
      contentContainerStyle={styles.containerContent}
      style={[
        {
          opacity: translateY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
          }),
        },
        styles.container,
      ]}
    >
      <View style={styles.code}>
        <QRCode
          value="https://www.linkedin.com/in/hugo-duarte-3392bb153/"
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
    </Animated.ScrollView>
  );
}

export default menu;
