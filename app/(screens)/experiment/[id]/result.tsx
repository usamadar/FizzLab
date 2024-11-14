import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const experimentResults: Record<string, {
  reaction: string[];
  scientificExplanation: string;
  realWorldApplications: string[];
  funFacts: string[];
}> = {
  "1": {
    reaction: [
      "When baking soda and vinegar mix:",
      "• Bubbles form rapidly",
      "• The mixture fizzes and foams",
      "• The container feels cool to touch"
    ],
    scientificExplanation: 
      "This is an acid-base reaction! Vinegar (acetic acid) reacts with baking soda (sodium bicarbonate) to produce carbon dioxide gas (the bubbles), water, and sodium acetate.",
    realWorldApplications: [
      "Baking (makes cakes rise)",
      "Cleaning products",
      "Fire extinguishers",
      "Volcanic eruption models"
    ],
    funFacts: [
      "The same reaction helps make cake batter rise!",
      "This reaction is endothermic - it absorbs heat",
      "The gas produced is the same as what we breathe out",
      "Ancient Egyptians used similar reactions for baking"
    ]
  },
  "2": {
    reaction: [
      "When you add the Alka-Seltzer:",
      "• Colored water bubbles rise through the oil",
      "• Bubbles float up and sink back down",
      "• The mixture creates a mesmerizing lava lamp effect"
    ],
    scientificExplanation: 
      "This experiment demonstrates density and polarity! Oil and water don't mix because of their different densities and molecular structures. The Alka-Seltzer creates gas bubbles that carry the colored water upward, then sink when the bubbles pop.",
    realWorldApplications: [
      "Oil-water separation in industry",
      "Making salad dressings",
      "Cleaning up oil spills",
      "Understanding fluid dynamics"
    ],
    funFacts: [
      "Original lava lamps were invented in 1963",
      "Oil floats because it's less dense than water",
      "Water molecules are polar, oil molecules are non-polar",
      "This principle helps in environmental cleanup"
    ]
  }
};

export default function ExperimentResultScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const results = experimentResults[id as string];

  if (!results) {
    return (
      <View style={styles.container}>
        <Text>Results not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.successBanner}>
          <Ionicons name="checkmark-circle" size={60} color="#4CAF50" />
          <Text style={styles.successText}>Experiment Complete!</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Happened?</Text>
          {results.reaction.map((point, index) => (
            <Text key={index} style={styles.reactionText}>{point}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>The Science Behind It</Text>
          <View style={styles.explanationCard}>
            <Text style={styles.explanationText}>{results.scientificExplanation}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Real World Applications</Text>
          <View style={styles.listCard}>
            {results.realWorldApplications.map((app, index) => (
              <View key={index} style={styles.listItem}>
                <Ionicons name="flask" size={20} color="#007AFF" />
                <Text style={styles.listText}>{app}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fun Facts!</Text>
          <View style={styles.listCard}>
            {results.funFacts.map((fact, index) => (
              <View key={index} style={styles.listItem}>
                <Ionicons name="bulb" size={20} color="#FFA000" />
                <Text style={styles.listText}>{fact}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/(screens)')}
        >
          <Text style={styles.buttonText}>Try Another Experiment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    padding: 20,
  },
  successBanner: {
    alignItems: 'center',
    marginBottom: 24,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  reactionText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444',
  },
  explanationCard: {
    backgroundColor: '#E3F2FD',
    padding: 16,
    borderRadius: 8,
  },
  explanationText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#1565C0',
  },
  listCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  listText: {
    fontSize: 16,
    marginLeft: 12,
    flex: 1,
    color: '#444',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
}); 