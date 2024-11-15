import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { getExperimentStatus } from '../utils/storage';
import { useFocusEffect } from '@react-navigation/native';

// Define the experiment type
type Experiment = {
  id: string;
  title: string;
  image: any;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
};

const experiments: Experiment[] = [
  { id: '1', title: 'Baking Soda & Vinegar', image: require('../../assets/images/baking_soda.jpeg'), difficulty: 'Easy', duration: '15 minutes' },
  { id: '2', title: 'Lava Lamp', image: require('../../assets/images/lava_lamp.jpeg'), difficulty: 'Medium', duration: '30 minutes' },
  { id: '3', title: 'Rainbow Milk', image: require('../../assets/images/rainbow_milk.jpeg'), difficulty: 'Easy', duration: '15 minutes' },
  { id: '4', title: 'Crystal Garden', image: require('../../assets/images/crystal_garden.jpeg'), difficulty: 'Hard', duration: '7 days' },
  { id: '5', title: 'Dancing Raisins', image: require('../../assets/images/dancing_raisins.jpeg'), difficulty: 'Easy', duration: '15 minutes' },
  { id: '6', title: 'Invisible Ink', image: require('../../assets/images/invisible_ink.jpeg'), difficulty: 'Medium', duration: '30 minutes' },
  { id: '7', title: 'Magnetic Slime', image: require('../../assets/images/magnetic_slime.jpeg'), difficulty: 'Hard', duration: '45 minutes' },
  { id: '8', title: 'Cloud in a Jar', image: require('../../assets/images/cloud_jar.jpeg'), difficulty: 'Medium', duration: '20 minutes' },
  { id: '9', title: 'Walking Water Rainbow', image: require('../../assets/images/water_rainbow.jpeg'), difficulty: 'Easy', duration: '30 minutes' },
  { id: '10', title: 'DNA Extraction', image: require('../../assets/images/dna_extraction.jpeg'), difficulty: 'Hard', duration: '40 minutes' }
];

// Removing unused type definition

export default function HomeScreen() {
  const [completionStatus, setCompletionStatus] = useState<{[key: string]: boolean}>({});

  const loadCompletionStatus = async () => {
    const statuses: {[key: string]: boolean} = {};
    for (const exp of experiments) {
      const status = await getExperimentStatus(exp.id);
      statuses[exp.id] = status?.isCompleted || false;
    }
    setCompletionStatus(statuses);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadCompletionStatus();
    }, [])
  );

  // Get gradient colors based on difficulty
  const getGradientColors = (difficulty: string): [string, string] => {
    switch(difficulty.toLowerCase()) {
      case 'easy':
        return ['#4CAF50', '#81C784'];
      case 'medium':
        return ['#FF9800', '#FFB74D'];
      case 'hard':
        return ['#F44336', '#E57373'];
      default:
        return ['#ffffff', '#f8f8f8'];
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.subtitle}>Discover the magic of science through fun experiments! 🧪</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        data={experiments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/experiment/${item.id}`} asChild>
            <TouchableOpacity>
              <LinearGradient
                colors={getGradientColors(item.difficulty)}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientCard}
              >
                <Image 
                  source={item.image} 
                  style={styles.image}
                  resizeMode="cover"
                />
                <View style={styles.cardContent}>
                  <Text style={[styles.cardTitle, { color: '#fff' }]}>
                    {item.title}
                  </Text>
                  <Text style={[styles.cardSubtitle, { color: '#fff' }]}>
                    Tap to start →
                  </Text>
                  <View style={styles.cardMeta}>
                    <View style={[styles.difficultyBadge, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
                      <Text style={styles.badgeText}>{item.difficulty}</Text>
                    </View>
                    <Text style={[styles.duration, { color: '#fff' }]}>
                      {item.duration}
                    </Text>
                  </View>
                  {completionStatus[item.id] && (
                    <View style={styles.completionBadge}>
                      <Ionicons 
                        name="checkmark-circle" 
                        size={24} 
                        color="#4CAF50" 
                      />
                    </View>
                  )}
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16,
    backgroundColor: '#f8f8f8' 
  },
  heroSection: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  listContainer: {
    paddingBottom: 20,
  },
  gradientCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16,
    marginBottom: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: { 
    width: 100, 
    height: 100, 
    marginRight: 16, 
    borderRadius: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: { 
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  cardMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  duration: {
    fontSize: 12,
  },
  completionBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 12,
    padding: 4,
  },
}); 