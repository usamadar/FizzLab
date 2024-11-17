import { CompleteExperiment } from '../../types/experiment';

const experiment: CompleteExperiment = {
  id: "4",
  title: "Crystal Garden",
  image: require('@/assets/images/crystal_garden.jpeg'),
  difficulty: 'Hard',
  duration: '7 days',
  description: "Grow your own colorful crystal garden using household chemicals and watch the crystals form over time!",
  materials: [
    { name: "Epsom Salt", amount: "1 cup", icon: "cube-outline" },
    { name: "Hot Water", amount: "1 cup", icon: "water-outline" },
    { name: "Food Coloring", amount: "Various colors", icon: "color-palette-outline" },
    { name: "Glass Container", amount: "1", icon: "flask-outline" },
    { name: "Mixing Bowl", amount: "1", icon: "beaker-outline" },
    { name: "Spoon", amount: "1", icon: "restaurant-outline" }
  ],
  steps: [
    "Dissolve Epsom salt in hot water in the mixing bowl",
    "Stir until no crystals remain visible",
    "Divide solution into smaller portions",
    "Add different food coloring to each portion",
    "Pour the solutions into your glass container",
    "Place the container in a warm, dry place",
    "Watch crystals form over several days",
    "Observe daily changes in crystal size"
  ],
  safetyNotes: [
    "Adult supervision required",
    "Use caution with hot water",
    "Do not consume the crystals",
    "Keep away from pets and small children",
    "Wear gloves when handling chemicals",
    "Wash hands after handling materials",
    "Dispose of crystals properly when done"
  ],
  results: {
    reaction: [
      "Over several days:",
      "• Crystals begin forming on container surfaces",
      "• Crystal structures grow larger and branch out",
      "• Colors remain distinct in different areas",
      "• Final crystals have unique geometric shapes"
    ],
    scientificExplanation: 
      "This demonstrates crystallization and supersaturation! As water evaporates, the solution becomes supersaturated, forcing the Epsom salt (magnesium sulfate) to form crystal structures. The regular geometric shapes are due to the molecular structure of the salt.",
    realWorldApplications: [
      "Mineral formation in nature",
      "Industrial crystallization processes",
      "Gemstone formation understanding",
      "Chemical purification methods"
    ],
    funFacts: [
      "Natural crystals can take thousands of years to form",
      "Each type of crystal has a unique shape based on its molecular structure",
      "The same process forms stalactites in caves",
      "Scientists use crystal growth to study materials in space"
    ]
  },
  keyScientificConcepts: [
    {
      name: "Crystallization",
      wikiLink: "https://en.wikipedia.org/wiki/Crystallization"
    },
    {
      name: "Supersaturation",
      wikiLink: "https://en.wikipedia.org/wiki/Supersaturation"
    },
    {
      name: "Evaporation",
      wikiLink: "https://en.wikipedia.org/wiki/Evaporation"
    },
    {
      name: "Crystal Structure",
      wikiLink: "https://en.wikipedia.org/wiki/Crystal_structure"
    }
  ]
};

export default experiment;