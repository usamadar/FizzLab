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
  },
  "5": {
    id: "5",
    title: "Dancing Raisins",
    description: "Watch raisins dance up and down as they ride bubbles created by a chemical reaction between baking soda and vinegar!",
    materials: [
      { name: "Raisins", amount: "10-15", icon: "nutrition-outline" },
      { name: "White Vinegar", amount: "2 cups", icon: "beaker-outline" },
      { name: "Baking Soda", amount: "2 tablespoons", icon: "cube-outline" },
      { name: "Tall Clear Glass", amount: "1", icon: "flask-outline" },
      { name: "Spoon", amount: "1", icon: "restaurant-outline" },
      { name: "Measuring Cup", amount: "1", icon: "calculator-outline" }
    ],
    steps: [
      "Fill the tall glass about 3/4 full with vinegar",
      "Drop 5-6 raisins into the glass",
      "Add 1/2 teaspoon of baking soda and stir gently",
      "Watch the raisins start to dance!",
      "Add another 1/2 teaspoon of baking soda when bubbles slow down",
      "Record how the raisins move up and down"
    ],
    safetyNotes: [
      "Keep vinegar away from eyes",
      "Do not drink the mixture",
      "Perform in a well-ventilated area",
      "Clean up any spills immediately",
      "Adult supervision required"
    ]
  },
  "6": {
    id: "6",
    title: "Invisible Ink",
    description: "Create secret messages using lemon juice as invisible ink that reveals itself when heated!",
    materials: [
      { name: "Lemon Juice", amount: "1/4 cup", icon: "water-outline" },
      { name: "White Paper", amount: "several sheets", icon: "document-outline" },
      { name: "Cotton Swab/Small Brush", amount: "1-2", icon: "brush-outline" },
      { name: "Hair Dryer/Lamp", amount: "1", icon: "bulb-outline" },
      { name: "Small Bowl", amount: "1", icon: "disc-outline" },
      { name: "Fresh Lemon (optional)", amount: "1", icon: "nutrition-outline" }
    ],
    steps: [
      "Pour lemon juice into the small bowl",
      "Dip cotton swab or brush into lemon juice",
      "Write your secret message on the paper",
      "Let the juice dry completely (about 5 minutes)",
      "To reveal: Heat paper with hair dryer or hold near lamp",
      "Watch your message appear in brown!"
    ],
    safetyNotes: [
      "Adult supervision required when using heat",
      "Keep paper away from direct flame",
      "Don't hold paper too close to heat source",
      "Be careful with hot surfaces",
      "Keep lemon juice away from eyes"
    ]
  },
  "7": {
    id: "7",
    title: "Magnetic Slime",
    description: "Create an amazing magnetic slime that moves and stretches when exposed to magnets! Learn about magnetic fields and non-Newtonian fluids.",
    materials: [
      { name: "White School Glue", amount: "1 bottle (4 oz)", icon: "color-fill-outline" },
      { name: "Iron Oxide Powder", amount: "2-3 tablespoons", icon: "flask-outline" },
      { name: "Borax", amount: "1 teaspoon", icon: "cube-outline" },
      { name: "Warm Water", amount: "1/2 cup", icon: "water-outline" },
      { name: "Strong Neodymium Magnet", amount: "1-2", icon: "magnet-outline" },
      { name: "Mixing Bowls", amount: "2", icon: "disc-outline" },
      { name: "Measuring Spoons", amount: "1 set", icon: "calculator-outline" },
      { name: "Protective Gloves", amount: "1 pair", icon: "hand-left-outline" },
      { name: "Plastic Container", amount: "1", icon: "cube-outline" }
    ],
    steps: [
      "Put on protective gloves",
      "In one bowl, mix 1/2 cup warm water with 1 teaspoon borax until dissolved",
      "In second bowl, pour entire bottle of white glue",
      "Add iron oxide powder to glue and mix thoroughly",
      "Slowly pour borax solution into glue mixture while stirring",
      "Knead the mixture until it forms a slimy consistency",
      "Test the slime with the magnet",
      "Store in airtight container when not in use"
    ],
    safetyNotes: [
      "Wear protective gloves when handling iron oxide",
      "Do not ingest any materials",
      "Keep magnets away from electronic devices",
      "Adult supervision required",
      "Wash hands after handling slime",
      "Keep materials away from eyes and mouth",
      "Store magnets safely away from small children"
    ]
  },
  "8": {
    id: "8",
    title: "Cloud in a Jar",
    description: "Create your own miniature cloud and learn about weather formation! Watch how pressure and temperature changes create visible water vapor.",
    materials: [
      { name: "Large Glass Jar", amount: "1", icon: "flask-outline" },
      { name: "Hot Water", amount: "1/3 cup", icon: "water-outline" },
      { name: "Ice Cubes", amount: "4-5", icon: "cube-outline" },
      { name: "Hairspray", amount: "small amount", icon: "color-fill-outline" },
      { name: "Metal Plate/Lid", amount: "1", icon: "disc-outline" },
      { name: "Measuring Cup", amount: "1", icon: "calculator-outline" },
      { name: "Dark Paper", amount: "1 sheet", icon: "document-outline" }
    ],
    steps: [
      "Pour hot water into the glass jar",
      "Quickly spray a small amount of hairspray into the jar",
      "Place metal plate on top of jar",
      "Put ice cubes on the metal plate",
      "Watch closely as the cloud forms",
      "Place dark paper behind jar to see better",
      "When cloud forms, remove lid to release it"
    ],
    safetyNotes: [
      "Adult supervision required for hot water",
      "Use hairspray in well-ventilated area",
      "Be careful handling hot water and glass",
      "Don't inhale hairspray",
      "Keep materials away from face and eyes",
      "Place jar on stable surface"
    ]
  },
  "9": {
    id: "9",
    title: "Walking Water Rainbow",
    description: "Create a colorful rainbow effect as water appears to 'walk' between glasses using paper towels and capillary action!",
    materials: [
      { name: "Clear Glasses/Jars", amount: "7", icon: "flask-outline" },
      { name: "Paper Towels", amount: "6 strips", icon: "document-outline" },
      { name: "Food Coloring", amount: "3 colors", icon: "color-palette-outline" },
      { name: "Water", amount: "3 cups", icon: "water-outline" },
      { name: "Measuring Cup", amount: "1", icon: "calculator-outline" },
      { name: "Scissors", amount: "1", icon: "cut-outline" },
      { name: "Tray/Surface Protection", amount: "1", icon: "square-outline" }
    ],
    steps: [
      "Arrange 7 glasses in a row",
      "Fill 1st, 3rd, 5th, and 7th glasses with water",
      "Add red food coloring to 1st glass",
      "Add yellow to 3rd glass",
      "Add blue to 5th glass",
      "Fold paper towel strips lengthwise",
      "Connect glasses with paper towel bridges",
      "Watch colors walk and mix over time"
    ],
    safetyNotes: [
      "Keep workspace protected from spills",
      "Food coloring can stain clothes and surfaces",
      "Adult supervision for scissors",
      "Clean up spills immediately",
      "Don't drink the colored water",
      "Keep materials away from eyes"
    ]
  },
  "10": {
    id: "10",
    title: "DNA Extraction",
    description: "Extract real DNA from fruit using household materials! Learn about cell structures and genetic material while creating visible DNA strands.",
    materials: [
      { name: "Ripe Banana/Strawberries", amount: "1-2", icon: "nutrition-outline" },
      { name: "Rubbing Alcohol", amount: "1/2 cup", icon: "flask-outline" },
      { name: "Dish Soap", amount: "2 tablespoons", icon: "water-outline" },
      { name: "Salt", amount: "1 teaspoon", icon: "cube-outline" },
      { name: "Warm Water", amount: "1/2 cup", icon: "thermometer-outline" },
      { name: "Clear Glass", amount: "1", icon: "beaker-outline" },
      { name: "Plastic Bag", amount: "1", icon: "bag-outline" },
      { name: "Coffee Filter", amount: "1", icon: "funnel-outline" },
      { name: "Wooden Stick/Skewer", amount: "1", icon: "pencil-outline" }
    ],
    steps: [
      "Put rubbing alcohol in freezer 30 minutes before starting",
      "Mash banana/strawberries in plastic bag until smooth",
      "Mix warm water, salt, and dish soap in glass",
      "Add mixture to fruit mash and gently mix",
      "Filter mixture through coffee filter into clean glass",
      "Slowly pour cold alcohol down side of glass",
      "Wait 2-3 minutes for layers to separate",
      "Use stick to collect white DNA strands at layer interface"
    ],
    safetyNotes: [
      "Adult supervision required",
      "Do not consume any materials",
      "Keep rubbing alcohol away from heat/flames",
      "Wear protective gloves if available",
      "Wash hands after handling materials",
      "Avoid contact with eyes and mouth",
      "Dispose of materials properly"
    ]
  },
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