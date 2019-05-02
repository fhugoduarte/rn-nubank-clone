import React from 'react';
import { View, Text, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import styles from './styles';

function main() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;
      let opened = false;
      offset += translationY;

      if (translationY >= 100) opened = true;
      else {
        translateY.setOffset(0);
        translateY.setValue(offset);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Menu translateY={translateY} />
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View
            style={[
              {
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [-350, 0, 380],
                      outputRange: [-50, 0, 380],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
              styles.card,
            ]}
          >
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
          </Animated.View>
        </PanGestureHandler>
      </View>
      <Tabs translateY={translateY} />
    </View>
  );
}

export default main;
