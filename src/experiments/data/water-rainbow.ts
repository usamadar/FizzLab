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
    "Line up 7 glasses in a row on a stable surface",
    "Fill measuring cup with 1/2 cup water for each glass",
    "Pour water into alternate glasses (1st, 3rd, 5th, and 7th)",
    "Add red food coloring to the 1st glass, yellow to the 3rd glass, and blue to the 5th glass (4-5 drops each)",
    "Fold each paper towel in half lengthwise to make strips",
    "Create bridges by placing paper towel ends in adjacent glasses",
    "Make sure paper towel ends touch bottom of each glass",
    "Wait 20-30 minutes to watch colors travel and mix"
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
    ],
    keyScientificConcepts: [
      {
        name: "Capillary Action",
        wikiLink: "https://en.wikipedia.org/wiki/Capillary_action"
      },
      {
        name: "Adhesion",
        wikiLink: "https://en.wikipedia.org/wiki/Adhesion"
      },
      {
        name: "Cohesion",
        wikiLink: "https://en.wikipedia.org/wiki/Cohesion_(chemistry)"
      },
      {
        name: "Color Theory",
        wikiLink: "https://en.wikipedia.org/wiki/Color_theory"
      }
    ]
  }
};

export default experiment;