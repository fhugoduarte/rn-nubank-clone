import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  annotation: {
    color: '#333',
    fontSize: 12,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 4,
    flex: 1,
    height: '100%',
    left: 0,
    marginHorizontal: 20,
    position: 'absolute',
    right: 0,
    top: 380,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  cardFooter: {
    backgroundColor: '#EEE',
    borderRadius: 4,
    padding: 30,
  },
  cardHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  container: {
    backgroundColor: '#8B10AE',
    flex: 1,
    justifyContent: 'center',
    paddingTop: getStatusBarHeight(),
  },
  content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
  },
  description: {
    color: '#333',
    fontSize: 32,
    marginTop: 3,
  },
  title: {
    color: '#999',
    fontSize: 13,
  },
});

export default styles;
