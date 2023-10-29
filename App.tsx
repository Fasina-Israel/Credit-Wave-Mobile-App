import { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Provider } from "react-redux";
import AppNavigator from './src/navigation/AppNavigator';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import { SvgUri } from 'react-native-svg';
import CreditWave from './src/assets/spalsh/CreditWaveLogo.svg'

export default function App() {
  const [isAppReady, setAppReady] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 3000);

  }, []);

  if (!isAppReady) {
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <CreditWave />
        </View>
      </View>
    );
  }


  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor} />
      <AppNavigator />
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignItems: "flex-start",
  }
});
