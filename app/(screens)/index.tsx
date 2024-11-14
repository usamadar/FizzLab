import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

// Define the experiment type
type Experiment = {
  id: string;
  title: string;
  image: any;
};

const experiments: Experiment[] = [
  { id: '1', title: 'Baking Soda & Vinegar', image: require('../../assets/images/baking_soda.jpeg') },
  { id: '2', title: 'Lava Lamp', image: require('../../assets/images/lava_lamp.jpeg') },
  // Add more experiments here
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fizz Lab</Text>
      <FlatList
        data={experiments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/experiment/${item.id}`} asChild>
            <TouchableOpacity style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f8f8' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { flexDirection: 'row', alignItems: 'center', padding: 15, marginBottom: 10, backgroundColor: '#fff', borderRadius: 8 },
  image: { width: 50, height: 50, marginRight: 10 },
  cardTitle: { fontSize: 18 },
}); 