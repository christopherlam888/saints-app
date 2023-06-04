import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/logo.png')} />
      <Text style={styles.title}>Saints App</Text>
      <Text style={styles.author}>Developed by Christopher Lam</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.content}>
        Saints App is an app to help you on your journey of faith. Explore 250 of the most popular
        Catholic Saints and read several of the most important Catholic prayers. Each day, you can
        learn about a saint whose feastday falls on that day, and if you would like, you can even
        continue to see another saint at the click of a button.
      </Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: "5%",
  },
  image: {
    width: 250,
    height: 250,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  author: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  content: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
});
