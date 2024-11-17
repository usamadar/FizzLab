import { CompleteExperiment } from '@/src/types/experiment';

const experiment: CompleteExperiment = {
  id: "3",
  title: "Rainbow Milk",
  image: require('@/assets/images/rainbow_milk.jpeg'),
  difficulty: 'Easy',
  duration: '15 minutes',
  description: "Create a stunning display of swirling colors in milk using common household items!",
  materials: [
    { name: "Whole Milk", amount: "1 cup", icon: "water-outline" },
    { name: "Food Coloring", amount: "4 different colors", icon: "color-palette-outline" },
    { name: "Dish Soap", amount: "1 drop", icon: "water-outline" },
    { name: "Shallow Dish", amount: "1", icon: "disc-outline" },
    { name: "Cotton Swab", amount: "1", icon: "brush-outline" }
  ],
  steps: [
    "Pour milk into the shallow dish",
    "Add drops of different food colors around the milk",
    "Dip the cotton swab in dish soap",
    "Touch the soapy swab to different colored areas",
    "Watch the colors dance and swirl!",
    "Try touching different spots to create new patterns"
  ],
  safetyNotes: [
    "Do not drink the colored milk",
    "Keep soap away from eyes",
    "Clean up spills immediately",
    "Wash hands after the experiment",
    "Protect clothing and surfaces from food coloring"
  ],
  results: {
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
  keyScientificConcepts: [
    {
      name: "Surface Tension",
      wikiLink: "https://en.wikipedia.org/wiki/Surface_tension"
    },
    {
      name: "Molecular Polarity",
      wikiLink: "https://en.wikipedia.org/wiki/Chemical_polarity"
    },
    {
      name: "Emulsion",
      wikiLink: "https://en.wikipedia.org/wiki/Emulsion"
    },
    {
      name: "Fluid Dynamics",
      wikiLink: "https://en.wikipedia.org/wiki/Fluid_dynamics"
    }
  ]
};

export default experiment;