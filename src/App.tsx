import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
  Platform,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    if (Platform.OS == 'android') {
      SplashScreen.hide();
    }
  }, []);

  const {height} = useWindowDimensions();
  const [number, setNumber] = useState(0);

  function handlePress() {
    setNumber(number + 1);
  }

  return (
    <View style={[styles.container, {height}, StyleSheet.absoluteFill]}>
      <Text>Random number: {number}</Text>
      <View style={styles.br} />
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          styles.btn,
        ]}
        onPress={handlePress}>
        <Text style={styles.btnText}>Generate a number</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  br: {
    height: 12,
  },
  btn: {
    backgroundColor: '#222',
    padding: 10,
  },
  btnText: {
    color: '#fff',
  },
});
