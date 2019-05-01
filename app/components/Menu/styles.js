import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  code: {
    alignSelf: 'center',
    backgroundColor: '#FFF',
    padding: 10,
  },
  container: {
    marginHorizontal: 30,
  },
  containerContent: {},
  nav: {
    borderTopColor: '#FFFFFFB0',
    borderTopWidth: StyleSheet.hairlineWidth,
    marginTop: 30,
  },
  navItem: {
    alignItems: 'center',
    borderBottomColor: '#FFFFFFB0',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    paddingVertical: 12,
  },
  navText: {
    color: '#FFF',
    fontSize: 15,
    marginLeft: 20,
  },
  signOutButton: {
    alignItems: 'center',
    borderColor: '#FFFFFFB0',
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    marginTop: 15,
    padding: 12,
  },
  signOutButtonText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default styles;
