import React, { useState } from 'react';

import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View, BoxView } from '../../components/Themed';

import { ScrollView } from 'react-native';

import data from '../../assets/data/prayers.json';

export default function TabTwoScreen() {

  interface Prayer {
    name: string;
    content: string;
  }

  const prayers: Prayer[] = data;
  console.log(prayers)

  const [expandedPrayerIndex, setExpandedPrayerIndex] = useState<number | null>(null);

  const handlePrayerToggle = (index: number) => {
    setExpandedPrayerIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prayers</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {prayers.map((prayer, index) => (
          <TouchableOpacity activeOpacity={1} key={index} onPress={() => handlePrayerToggle(index)}>
            <Text style={styles.name}>{prayer.name}</Text>
            {expandedPrayerIndex === index && (
              <BoxView style={styles.box}>
                <Text style={styles.content}>{prayer.content}</Text>
              </BoxView>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    marginVertical: "5%",
    width: "100%",
    borderWidth: 2,
  },
  separator: {
    marginBottom: "5%",
    height: 1,
    width: '80%',
  },
  title: {
    height: "10%",
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
    padding: 10,
    fontWeight: 'bold',
  },
  content: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    padding: 10,
  },
});

