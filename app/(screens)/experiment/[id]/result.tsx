import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getExperimentResults } from '@/src/experiments';
import { setExperimentStatus } from '@/src/utils/storage';

export default function ResultScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const results = getExperimentResults(id as string);

  useEffect(() => {
    const markAsCompleted = async () => {
      await setExperimentStatus(id as string, {
        isCompleted: true,
        lastCompletedAt: new Date()
      });
    };
    markAsCompleted();
  }, [id]);

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

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => router.push('/(screens)')}
          >
            <Text style={styles.buttonText}>Try Another Experiment</Text>
          </TouchableOpacity>
        </View>
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
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 20,
  }
});