import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8B10AE',
    flex: 1,
    paddingTop: getStatusBarHeight(),
  },
});

export default styles;
