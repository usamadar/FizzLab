import { CompleteExperiment } from '@/src/types/experiment';

const experiment: CompleteExperiment = {
  id: "9",
  title: "Water Rainbow",
  image: require('@/assets/images/water_rainbow.jpeg'),
  difficulty: 'Medium',
  duration: '30 minutes',
  description: "Create a colorful rainbow bridge between glasses using water and paper towels!",
  materials: [
    { name: "Clear Glasses", amount: "7", icon: "beer-outline" },
    { name: "Paper Towels", amount: "6 strips", icon: "document-outline" },
    { name: "Food Coloring", amount: "Red, Yellow, Blue", icon: "color-palette-outline" },
    { name: "Water", amount: "3 cups", icon: "water-outline" },
    { name: "Measuring Cup", amount: "1", icon: "beaker-outline" }
  ],
  steps: [
    "Line up 7 glasses in a row",
    "Fill alternate glasses with water (1,3,5,7)",
    "Add different food coloring to each filled glass",
    "Fold paper towels into long strips",
    "Create bridges between glasses with paper towels",
    "Make sure paper towel ends touch bottom of glasses",
    "Watch colors travel across paper bridges",
    "Observe new colors forming where they meet"
  ],
  safetyNotes: [
    "Keep workspace protected from spills",
    "Food coloring can stain - wear old clothes",
    "Clean up any spills immediately",
    "Keep materials away from eyes",
    "Wash hands after handling dyed water",
    "Adult supervision recommended"
  ],
  results: {
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
  }
};

export default experiment;