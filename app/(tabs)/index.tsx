import React, { useState } from 'react';

import { StyleSheet } from 'react-native';

import { Text, View, BoxView, TouchableOpacity } from '../../components/Themed';

import { ScrollView } from 'react-native';

import data from '../../assets/data/saints.json';

export default function TabOneScreen() {

  interface Saint {
    name: string;
    feastday: string;
    content: string;
  }

  const saints: Saint[] = data;
  console.log(saints);

  const monthNames: string[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date: Date = new Date();
  const today: string = monthNames[date.getMonth()] + ' ' + date.getDate();
  console.log(today);

  const saints_today: Saint[] = saints.filter((saint) => saint.feastday === today);
  console.log(saints_today);

  const [saint, setSaint] = useState<Saint>(saints_today.length > 0 ? saints_today[Math.floor(Math.random() * saints_today.length)] : { name: "No Saint Today", feastday: today, content: "" });
  console.log(saint);

  const randomSaint = () => {
    setSaint(saints[Math.floor(Math.random() * saints.length)]);
    console.log(saint);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.feastday}>{saint.feastday}</Text>
      <Text style={styles.name}>{saint.name}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <BoxView style={styles.box}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.content}>{saint.content}</Text>
        </ScrollView>
      </BoxView>
      <View style={styles.buttonview}>
        <TouchableOpacity activeOpacity={0.75} style={styles.button} onPress={randomSaint}>
          <Text style={styles.buttontext}>See Another Saint</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: "5%",
  },
  box: {
    height: "65%",
    width: "100%",
    borderWidth: 4,
  },
  separator: {
    marginBottom: "5%",
    height: 1,
    width: '100%',
  },
  buttonview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: "5%",
  },
  button: {
    borderRadius: 10,
  },
  feastday: {
    height: "5%",
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  name: {
    height: "10%",
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 10,
  },
  content: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 33,
    padding: 20,
  },
  buttontext: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    padding: 10,
  },
});
