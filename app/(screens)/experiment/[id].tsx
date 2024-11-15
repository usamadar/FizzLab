import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getExperimentStatus, resetExperimentStatus } from '../../utils/storage';

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
  },
  "3": {
    id: "3",
    title: "Rainbow Milk",
    description: "Create a stunning display of swirling colors in milk!",
    materials: [
      { name: "Whole Milk", amount: "1 cup", icon: "water-outline" },
      { name: "Food Coloring", amount: "4 different colors", icon: "color-palette-outline" },
      { name: "Dish Soap", amount: "1 drop", icon: "flask-outline" },
      { name: "Cotton Swab", amount: "1", icon: "brush-outline" },
      { name: "Shallow Plate", amount: "1", icon: "disc-outline" },
    ],
    steps: [
      "Pour milk into the shallow plate",
      "Add drops of different food colors",
      "Dip cotton swab in dish soap",
      "Touch the milk surface with the soap-dipped swab",
      "Watch the colors dance!"
    ],
    safetyNotes: [
      "Do not drink the milk mixture",
      "Keep materials away from eyes",
      "Clean spills immediately",
      "Adult supervision recommended"
    ]
  },
  "4": {
    id: "4",
    title: "Crystal Garden",
    description: "Grow your own colorful crystal garden using household materials! This experiment teaches about supersaturated solutions and crystallization.",
    materials: [
      { name: "Epsom Salt", amount: "2 cups", icon: "flask-outline" },
      { name: "Hot Water", amount: "2 cups", icon: "water-outline" },
      { name: "Food Coloring", amount: "Various colors", icon: "color-palette-outline" },
      { name: "Glass Jars", amount: "3-4", icon: "beaker-outline" },
      { name: "Mixing Bowl", amount: "1", icon: "disc-outline" },
      { name: "Measuring Cup", amount: "1", icon: "calculator-outline" },
      { name: "Spoon", amount: "1", icon: "restaurant-outline" },
    ],
    steps: [
      "Heat water until very hot (adult supervision required)",
      "For each jar, mix 1/2 cup hot water with 1/2 cup Epsom salt",
      "Stir until salt is completely dissolved",
      "Add different food coloring to each jar",
      "Place jars in a quiet spot where they won't be disturbed",
      "Observe crystal formation over the next week",
      "Document crystal growth each day"
    ],
    safetyNotes: [
      "Adult supervision required for hot water",
      "Be careful with glass containers",
      "Do not disturb solutions while crystals are forming",
      "Wash hands after handling materials",
      "Keep materials away from young children"
    ]
  }
};

export default function ExperimentDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [stepComplete, setStepComplete] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [lastCompletedAt, setLastCompletedAt] = useState<Date | null>(null);
  
  const experiment = experimentData[id as string];

  useEffect(() => {
    const checkCompletionStatus = async () => {
      const status = await getExperimentStatus(id as string);
      if (status?.isCompleted) {
        setIsCompleted(true);
        if (status.lastCompletedAt) {
          setLastCompletedAt(new Date(status.lastCompletedAt));
        }
      }
    };
    checkCompletionStatus();
  }, [id]);

  if (!experiment) {
    return <View style={styles.container}><Text>Experiment not found</Text></View>;
  }

  if (isCompleted) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.completedBanner}>
            <Ionicons name="checkmark-circle" size={80} color="#4CAF50" />
            <Text style={styles.completedTitle}>Experiment Completed!</Text>
            {lastCompletedAt && (
              <Text style={styles.completedDate}>
                Completed on {lastCompletedAt.toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </Text>
            )}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.primaryButton]}
              onPress={() => router.push(`/experiment/${id}/result`)}
            >
              <Text style={styles.buttonText}>View Results</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.secondaryButton]}
              onPress={async () => {
                await resetExperimentStatus(id as string);
                setIsCompleted(false);
                setLastCompletedAt(null);
              }}
            >
              <Text style={styles.buttonText}>Try Again</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.tertiaryButton]}
              onPress={() => router.back()}
            >
              <Text style={[styles.buttonText, styles.tertiaryButtonText]}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
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
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonReady: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  completedBanner: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
  },
  completedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  completedDate: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
  },
  secondaryButton: {
    backgroundColor: '#FF9800',
  },
  tertiaryButton: {
    backgroundColor: '#E0E0E0',
  },
  tertiaryButtonText: {
    color: '#333',
  },
}); 