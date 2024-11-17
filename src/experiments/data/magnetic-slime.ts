import { CompleteExperiment } from '@/src/types/experiment';

const experiment: CompleteExperiment = {
  id: "7",
  title: "Magnetic Slime",
  image: require('@/assets/images/magnetic_slime.jpeg'),
  difficulty: 'Medium',
  duration: '30 minutes',
  description: "Create amazing slime that moves and responds to magnetic forces!",
  materials: [
    { name: "White School Glue", amount: "1 cup", icon: "color-palette-outline" },
    { name: "Iron Oxide Powder", amount: "2-3 tablespoons", icon: "cube-outline" },
    { name: "Borax", amount: "1 teaspoon", icon: "flask-outline" },
    { name: "Warm Water", amount: "1/2 cup", icon: "water-outline" },
    { name: "Strong Neodymium Magnet", amount: "1", icon: "magnet-outline" },
    { name: "Mixing Bowl", amount: "2", icon: "beaker-outline" },
    { name: "Measuring Cups", amount: "1 set", icon: "beaker-outline" },
    { name: "Plastic Gloves", amount: "1 pair", icon: "hand-left-outline" }
  ],
  steps: [
    "Mix borax with warm water in one bowl until dissolved",
    "In second bowl, mix glue and iron oxide powder thoroughly",
    "Slowly pour borax solution into glue mixture while stirring",
    "Knead the forming slime with gloved hands",
    "Continue kneading until consistency is uniform",
    "Test slime with magnet to see attraction",
    "Experiment with different magnet positions",
    "Watch how the slime moves and follows the magnet"
  ],
  safetyNotes: [
    "Adult supervision required",
    "Wear gloves when handling materials",
    "Keep iron oxide away from eyes and mouth",
    "Do not ingest any materials",
    "Keep strong magnets away from electronics",
    "Store slime in airtight container",
    "Wash hands after handling",
    "Clean all surfaces thoroughly"
  ],
  results: {
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
  }
};

export default experiment;