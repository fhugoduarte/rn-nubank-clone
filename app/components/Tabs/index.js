import React from 'react';
import { View, ScrollView, Text, Animated } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

function tabs({ translateY }) {
  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [0, 30],
                extrapolate: 'clamp',
              }),
            },
          ],
          opacity: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [1, 0.3],
            extrapolate: 'clamp',
          }),
        },
        styles.container,
      ]}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabContainer}
        contentContainerStyle={styles.tabContainerContent}
      >
        <View style={styles.tabItem}>
          <Icon name="person-add" size={24} color="#FFF" />
          <Text style={styles.tabText}>Indicar amigos</Text>
        </View>
        <View style={styles.tabItem}>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <Text style={styles.tabText}>Cobrar</Text>
        </View>
        <View style={styles.tabItem}>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <Text style={styles.tabText}>Depositar</Text>
        </View>
        <View style={styles.tabItem}>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <Text style={styles.tabText}>Transferir</Text>
        </View>
        <View style={styles.tabItem}>
          <Icon name="lock" size={24} color="#FFF" />
          <Text style={styles.tabText}>Bloquear Cartão</Text>
        </View>
      </ScrollView>
    </Animated.View>
  );
}

export default tabs;
