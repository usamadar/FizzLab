import { CompleteExperiment } from '@/src/types/experiment';

const experiment: CompleteExperiment = {
  id: "10",
  title: "Strawberry DNA Extraction",
  image: require('@/assets/images/dna_extraction.jpeg'),
  difficulty: 'Hard',
  duration: '45 minutes',
  description: "Extract real DNA from strawberries using household materials!",
  materials: [
    { name: "Fresh Strawberries", amount: "2-3", icon: "nutrition-outline" },
    { name: "Rubbing Alcohol", amount: "1/2 cup", icon: "flask-outline" },
    { name: "Dish Soap", amount: "2 tablespoons", icon: "water-outline" },
    { name: "Salt", amount: "1/2 teaspoon", icon: "cube-outline" },
    { name: "Water", amount: "1/2 cup", icon: "water-outline" },
    { name: "Plastic Bags", amount: "2", icon: "file-tray-outline" },
    { name: "Coffee Filter", amount: "1", icon: "funnel-outline" },
    { name: "Clear Glass", amount: "1", icon: "beer-outline" },
    { name: "Wooden Stick", amount: "1", icon: "brush-outline" }
  ],
  steps: [
    "Place alcohol in freezer to chill",
    "Remove stems from strawberries",
    "Place strawberries in plastic bag",
    "Mix water, soap, and salt in separate container",
    "Add mixture to strawberries in bag",
    "Mash strawberries gently for 2 minutes",
    "Filter mixture through coffee filter into glass",
    "Slowly pour cold alcohol down side of glass",
    "Wait 2-3 minutes to see DNA strands form"
  ],
  safetyNotes: [
    "Adult supervision required",
    "Do not consume any materials",
    "Keep alcohol away from heat/flames",
    "Wear protective gloves if available",
    "Work in well-ventilated area",
    "Wash hands after experiment",
    "Dispose of materials properly"
  ],
  results: {
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
  }
};

export default experiment;