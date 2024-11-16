import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { setExperimentStatus, resetExperimentStatus } from '../../../utils/storage';
import { CommonActions } from '@react-navigation/native';

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
  },
  "3": {
    reaction: [
      "When soap touches the milk:",
      "• Colors start swirling instantly",
      "• Beautiful patterns form",
      "• Colors mix and create new shades",
      "• Movement continues for several seconds"
    ],
    scientificExplanation: 
      "This demonstrates surface tension! The soap breaks down milk's surface tension and fat molecules. As the soap molecules race around to attach to the fat molecules, they create currents in the milk that move the food coloring around.",
    realWorldApplications: [
      "Understanding detergents",
      "Studying molecular interactions",
      "Food science",
      "Chemical dispersal patterns"
    ],
    funFacts: [
      "Whole milk works best due to higher fat content",
      "This principle helps soap clean dishes",
      "Similar effects occur in cloud formation",
      "Artists use this technique in paper marbling"
    ]
  },
  "4": {
    reaction: [
      "Over the course of a week:",
      "• Crystals begin forming within 24 hours",
      "• Crystal structures grow larger each day",
      "• Different colors create unique patterns",
      "• Final crystals can be several centimeters long"
    ],
    scientificExplanation: 
      "This demonstrates supersaturation and crystallization. When the hot water cools, it can't hold as much salt in solution. The excess salt precipitates out as crystals. The slow cooling allows large, well-formed crystals to grow.",
    realWorldApplications: [
      "Mineral formation in nature",
      "Industrial crystallization processes",
      "Gemstone formation",
      "Manufacturing of pharmaceuticals"
    ],
    funFacts: [
      "Natural crystals can take thousands of years to form",
      "Each crystal has a unique molecular structure",
      "Temperature affects crystal size and shape",
      "Many precious gems are naturally formed crystals"
    ]
  },
  "5": {
    reaction: [
      "When raisins are added to the vinegar and baking soda mixture:",
      "• Bubbles form on the raisins' surface",
      "• Raisins rise to the top of the liquid",
      "• When bubbles pop, raisins sink back down",
      "• This up-and-down motion continues until reaction slows"
    ],
    scientificExplanation: 
      "This demonstrates both a chemical reaction and buoyancy! The baking soda and vinegar create carbon dioxide bubbles. These bubbles attach to the wrinkled surface of the raisins. When enough bubbles attach, they make the raisins buoyant enough to float. At the surface, the bubbles pop, making the raisins sink again until more bubbles attach.",
    realWorldApplications: [
      "Understanding how submarines control depth",
      "Designing flotation devices",
      "Gas-lift pumps in oil wells",
      "Carbonation in beverage industry"
    ],
    funFacts: [
      "Raisins work well because of their wrinkled surface",
      "Fish use a similar principle with swim bladders",
      "The same reaction helps make bread rise",
      "Ancient sailors used bubbles to predict weather"
    ]
  },
  "6": {
    reaction: [
      "When the lemon juice message is heated:",
      "• The invisible writing slowly appears",
      "• The color changes from clear to brown",
      "• The revealed text becomes permanent",
      "• Different heat levels affect darkness of text"
    ],
    scientificExplanation: 
      "This demonstrates oxidation! Lemon juice contains carbon compounds that are colorless at room temperature. When heated, these compounds oxidize (react with oxygen in the air) and break down, turning brown. This is similar to how apples turn brown when cut and exposed to air.",
    realWorldApplications: [
      "Development of security features in documents",
      "Forensic document analysis",
      "Heat-sensitive safety indicators",
      "Historical document preservation"
    ],
    funFacts: [
      "This technique was used in the American Revolution for secret messages",
      "Many other substances like milk or orange juice also work",
      "Ancient Romans used similar invisible ink methods",
      "Modern banknotes use advanced versions of this principle"
    ]
  },
  "7": {
    reaction: [
      "When the magnetic slime is complete:",
      "• Slime moves toward strong magnets",
      "• It can be stretched and pulled by magnetic force",
      "• The slime absorbs small magnetic objects",
      "• It returns to normal shape when magnet is removed",
      "• The slime appears metallic and shiny"
    ],
    scientificExplanation: 
      "This demonstrates ferromagnetism and non-Newtonian fluids! The iron oxide particles in the slime are attracted to magnets. The slime itself is a non-Newtonian fluid, meaning it can act like both a liquid and a solid depending on the force applied. The borax and glue create a polymer structure that gives the slime its stretchy properties.",
    realWorldApplications: [
      "Magnetic fluid seals in electronics",
      "Medical imaging contrast agents",
      "Shock absorbers in vehicles",
      "Smart materials in engineering",
      "Spill cleanup technology"
    ],
    funFacts: [
      "Similar magnetic fluids are used in some spacecraft",
      "The first magnetic fluid was invented by NASA",
      "Some animals can detect Earth's magnetic field",
      "Magnetic slime is a type of 'smart material' that responds to its environment",
      "Iron oxide is the same compound that makes rust"
    ]
  },
  "8": {
    reaction: [
      "When the experiment is set up:",
      "• Warm air rises to the top of the jar",
      "• Water vapor forms when warm air hits cold plate",
      "• Hairspray particles act as cloud seeds",
      "• A visible cloud forms and swirls in the jar",
      "• Cloud disappears when lid is removed"
    ],
    scientificExplanation: 
      "This demonstrates the water cycle and cloud formation! When warm, moist air rises and meets cold temperatures, water vapor condenses around tiny particles (like hairspray) in the air. This is called condensation nucleation, and it's exactly how real clouds form in the atmosphere. The hairspray particles act just like dust and other particles in the sky.",
    realWorldApplications: [
      "Weather forecasting",
      "Understanding climate patterns",
      "Cloud seeding technology",
      "Aviation weather planning",
      "Atmospheric science research"
    ],
    funFacts: [
      "An average cloud weighs around 1.1 million pounds",
      "Clouds can travel at speeds over 100 miles per hour",
      "There are 10 main types of clouds in the sky",
      "Some clouds form at ground level - we call them fog",
      "Cloud seeding is used to make rain in some countries"
    ]
  },
  "9": {
    reaction: [
      "As the experiment progresses:",
      "• Water begins climbing up the paper towels",
      "• Colors travel along the paper bridges",
      "• Empty glasses slowly fill with colored water",
      "• New colors form where different colors meet",
      "• Process continues until water levels equalize"
    ],
    scientificExplanation: 
      "This demonstrates capillary action and color mixing! Water molecules are attracted to the paper towel fibers (adhesion) and to each other (cohesion). This allows the water to move up against gravity through the tiny spaces between the paper towel fibers. As different colored waters meet, they mix to create secondary colors, showing how primary colors combine.",
    realWorldApplications: [
      "Plant water transportation systems",
      "Fabric and paper design",
      "Soil water movement",
      "Ink development for printers",
      "Medical diagnostic tools"
    ],
    funFacts: [
      "Trees use capillary action to transport water to their leaves",
      "The same principle helps marker pens work",
      "Ancient Egyptians used similar principles for irrigation",
      "A single paper towel can lift water several inches high",
      "This process happens naturally in soil after rain"
    ]
  },
  "10": {
    reaction: [
      "During the extraction process:",
      "• Soap breaks down cell membranes",
      "• Salt helps DNA strands clump together",
      "• Cold alcohol makes DNA precipitate",
      "• White stringy DNA becomes visible",
      "• DNA strands float between layers"
    ],
    scientificExplanation: 
      "This experiment demonstrates DNA extraction from living cells! The dish soap breaks open cell membranes to release DNA, while salt helps neutralize DNA's negative charge, allowing it to clump together. When cold alcohol is added, DNA becomes insoluble and precipitates out of solution, making it visible to the naked eye.",
    realWorldApplications: [
      "Forensic science and crime solving",
      "Genetic testing and research",
      "Agricultural crop improvement",
      "Medical diagnosis",
      "Evolutionary biology studies",
      "Biotechnology development"
    ],
    funFacts: [
      "If stretched out, the DNA in one cell would be 6 feet long",
      "Humans share 50% of their DNA with bananas",
      "DNA was first isolated in 1869 by Friedrich Miescher",
      "Your DNA could stretch to the sun and back 600 times",
      "Scientists can now edit DNA using CRISPR technology",
      "99.9% of human DNA is identical between people"
    ]
  },
};

export default function ExperimentResultScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const results = experimentResults[id as string];

  if (!results) {
    return (
      <View style={styles.container}>
        <Text>Results not found</Text>
      </View>
    );
  }

  const handleComplete = async () => {
    await setExperimentStatus(id as string, {
      isCompleted: true,
      lastCompletedAt: new Date()
    });
  };

  const handleReset = async () => {
    await resetExperimentStatus(id as string);
    router.push('/(screens)');
  };

  useEffect(() => {
    handleComplete();
  }, []);


  const handleGoHome = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: '(screens)/index' }
        ],
      })
    );
  };

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
            onPress={handleGoHome}
          >
            <Text style={styles.buttonText}>Try Another Experiment</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.resetButton]}
            onPress={handleReset}
          >
            <Text style={[styles.buttonText, styles.resetButtonText]}>Reset Progress</Text>
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
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 20,
    gap: 12,
  },
  resetButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF3B30',
  },
  resetButtonText: {
    color: '#FF3B30',
  },
}); 