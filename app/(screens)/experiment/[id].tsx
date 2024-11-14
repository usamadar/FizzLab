import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type ExperimentData = {
  id: string;
  title: string;
  description: string;
  materials: {
    name: string;
    amount: string;
    icon: string;
  }[];
  steps: string[];
  safetyNotes: string[];
};

const experimentData: Record<string, ExperimentData> = {
  "1": {
    id: "1",
    title: "Baking Soda & Vinegar Reaction",
    description: "Create an exciting chemical reaction that produces bubbles and foam!",
    materials: [
      { name: "Baking Soda", amount: "2 tablespoons", icon: "cube-outline" },
      { name: "Vinegar", amount: "1/2 cup", icon: "beaker-outline" },
      { name: "Large Container", amount: "1", icon: "flask-outline" },
    ],
    steps: [
      "Place the container on a flat surface",
      "Pour the vinegar into the container",
      "Slowly add the baking soda",
      "Watch the reaction happen!"
    ],
    safetyNotes: [
      "Keep away from eyes",
      "Adult supervision recommended",
      "Perform in a well-ventilated area"
    ]
  },
  "2": {
    id: "2",
    title: "Lava Lamp",
    description: "Create a colorful display of moving bubbles using household items!",
    materials: [
      { name: "Vegetable Oil", amount: "1 cup", icon: "water-outline" },
      { name: "Water", amount: "1/4 cup", icon: "beaker-outline" },
      { name: "Food Coloring", amount: "10 drops", icon: "color-palette-outline" },
      { name: "Alka-Seltzer", amount: "1 tablet", icon: "tablet-portrait-outline" },
      { name: "Clear Bottle", amount: "1", icon: "flask-outline" },
    ],
    steps: [
      "Fill the bottle about 2/3 with vegetable oil",
      "Add water until the bottle is nearly full",
      "Add several drops of food coloring",
      "Break the Alka-Seltzer tablet into small pieces",
      "Drop in one piece and watch the reaction!"
    ],
    safetyNotes: [
      "Do not drink the mixture",
      "Keep away from eyes",
      "Adult supervision recommended",
      "Clean up spills immediately to prevent slipping"
    ]
  }
};

export default function ExperimentDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [stepComplete, setStepComplete] = useState<number>(0);
  
  const experiment = experimentData[id as string];

  if (!experiment) {
    return (
      <View style={styles.container}>
        <Text>Experiment not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{experiment.title}</Text>
        <Text style={styles.description}>{experiment.description}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Materials Needed:</Text>
          {experiment.materials.map((material, index) => (
            <View key={index} style={styles.materialItem}>
              <Ionicons name={material.icon as any} size={24} color="#007AFF" />
              <View style={styles.materialText}>
                <Text style={styles.materialName}>{material.name}</Text>
                <Text style={styles.materialAmount}>{material.amount}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Steps:</Text>
          {experiment.steps.map((step, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.step, stepComplete > index && styles.stepCompleted]}
              onPress={() => setStepComplete(index + 1)}
            >
              <Ionicons 
                name={stepComplete > index ? "checkmark-circle" : "radio-button-off"} 
                size={24} 
                color={stepComplete > index ? "#4CAF50" : "#666"}
              />
              <Text style={styles.stepText}>{step}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Safety Notes:</Text>
          {experiment.safetyNotes.map((note, index) => (
            <View key={index} style={styles.safetyNote}>
              <Ionicons name="warning-outline" size={20} color="#FFA000" />
              <Text style={styles.safetyText}>{note}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={[styles.button, stepComplete === experiment.steps.length && styles.buttonReady]}
          onPress={() => stepComplete === experiment.steps.length && router.push(`/experiment/${id}/result`)}
        >
          <Text style={styles.buttonText}>
            {stepComplete === experiment.steps.length ? "See Results!" : "Complete All Steps"}
          </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  materialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  materialText: {
    marginLeft: 12,
  },
  materialName: {
    fontSize: 16,
    fontWeight: '500',
  },
  materialAmount: {
    fontSize: 14,
    color: '#666',
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  stepCompleted: {
    backgroundColor: '#E8F5E9',
  },
  stepText: {
    marginLeft: 12,
    fontSize: 16,
  },
  safetyNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3E0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  safetyText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#F57C00',
  },
  button: {
    backgroundColor: '#666',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonReady: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
}); 