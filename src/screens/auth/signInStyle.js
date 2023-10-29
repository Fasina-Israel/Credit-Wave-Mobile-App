import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Logo: {
    Width: 200,
    height: 100,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  headers: {
    paddingVertical: 10,
    marginTop: 10,
    gap: 7,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#155E56',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#A7A7A7',
  },
  inputField: {
    position: 'relative',
  },
  errorMessage: {
    color: '#c71d32',
    fontSize: 15,
    marginTop: -10,
    marginLeft: 5,
    fontFamily: 'satoshi',
    height: 25,
  },
  footerText: {
    color: '#6f6f6f',
  },
  eyeIcon: {
    position: 'relative',
    display: 'flex',
    alignSelf: 'flex-start',
    position: 'absolute',
    right: 10,
    top: 15,
  },
  btnText: {
    fontSize: 16,
  },
  arrowIcon: {
    position: 'absolute',
    top: 20,
  },
  apple: {
    position: 'absolute',
    bottom: 13,
    left: 90,
    zIndex: 10,
  },
  googleIcon: {
    top: 28,
    left: 90,
    zIndex: 10,
  },
  mobile: {
    top: 28,
    left: 90,
    zIndex: 10,
  },
  buttonText: {
    fontFamily: 'satoshi',
    fontWeight: '700',
  },
  checkBoxField: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    width: 320,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBox: {
    width: 20,
    cursor: 'pointer',
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  phoneNumberInput: {
    display: 'flex',
    flexDirection: 'row',
  },
  phoneNumberStyle: {
    width: 270,
    margin: 8,
    marginTop: 3,
    padding: 10,
    paddingTop: 5,
    borderRadius: 5,
    borderWidth: 1.55,
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
  password: {
    position: 'relative',
  },
  input: {
    margin: 2,
    marginBottom: 10,
    padding: 7,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#E9E9E9',
    fontSize: 16,
    position: 'relative',
    fontFamily: 'satoshi',
  },
  errorInput: {
    borderColor: '#c71d32',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#155E56',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  disabledButton: {
    marginTop: 20,
    backgroundColor: '#E4ECFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    margin: 8,
  },
  text2: {
    color: '#000',
  },
  label: {
    fontSize: 15,
    paddingLeft: 5,
    marginTop: 5,
    color: '#A7A7A7',
    fontWeight: '600',
    fontFamily: 'satoshi',
  },
  button2: {
    margin: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#bfbfbf',
    borderWidth: 1,
    color: '#000',
    fontFamily: 'satoshi',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    width: 300,
    gap: 10,
  },
  footer1: {
    width: 150,
    textAlign: 'center',
  },
  login: {
    color: '#155E56',
    fontWeight: '600',
  },
});
