import { CompleteExperiment } from '@/src/types/experiment';

const experiment: CompleteExperiment = {
  id: "1",
  title: "Baking Soda & Vinegar",
  image: require('@/assets/images/baking_soda.jpeg'),
  difficulty: 'Easy',
  duration: '15 minutes',
  description: "Create an exciting chemical reaction that produces bubbles and foam!",
  materials: [
    { name: "Baking Soda", amount: "2 tablespoons", icon: "cube-outline" },
    { name: "Vinegar", amount: "1/2 cup", icon: "beaker-outline" },
    { name: "Large Container", amount: "1", icon: "flask-outline" },
  ],
  steps: [
    "Place the large container on a flat surface in a well-ventilated area",
    "Pour 1/2 cup vinegar into the container",
    "Add baking soda one tablespoon at a time while stirring",
    "Stand back and watch the bubbling reaction",
    "After reaction slows, add remaining baking soda"
  ],
  safetyNotes: [
    "Keep away from eyes",
    "Adult supervision recommended",
    "Perform in a well-ventilated area"
  ],
  results: {
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
  }
};

export default experiment;
