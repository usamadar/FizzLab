import { CompleteExperiment } from '@/src/types/experiment';

const experiment: CompleteExperiment = {
  id: "2",
  title: "Lava Lamp",
  image: require('@/assets/images/lava_lamp.jpeg'),
  difficulty: 'Medium',
  duration: '30 minutes',
  description: "Create a colorful, mesmerizing display of bubbles that float up and down like a real lava lamp!",
  materials: [
    { name: "Clear Bottle/Container", amount: "1 large", icon: "flask-outline" },
    { name: "Water", amount: "2 cups", icon: "water-outline" },
    { name: "Vegetable Oil", amount: "1 cup", icon: "beaker-outline" },
    { name: "Food Coloring", amount: "10-15 drops", icon: "color-palette-outline" },
    { name: "Alka-Seltzer", amount: "1 tablet", icon: "tablet-portrait-outline" },
    { name: "Flashlight", amount: "1", icon: "flashlight-outline" },
  ],
  steps: [
    "Fill the bottle about 1/4 with water",
    "Add several drops of food coloring to the water",
    "Slowly pour the vegetable oil into the bottle until nearly full",
    "Wait for the oil and water to separate completely",
    "Break the Alka-Seltzer tablet into small pieces",
    "Drop in one piece and watch the reaction",
    "Shine the flashlight through the bottle for extra effect",
    "Add more tablet pieces when the reaction slows down"
  ],
  safetyNotes: [
    "Adult supervision required",
    "Do not drink the mixture",
    "Keep materials away from eyes and mouth",
    "Clean up spills immediately to prevent slipping",
    "Wash hands after the experiment",
    "Use plastic containers instead of glass for younger children"
  ],
  results: {
    reaction: [
      "When you add the Alka-Seltzer:",
      "• Colorful bubbles form at the bottom",
      "• Bubbles rise through the oil layer",
      "• Bubbles burst at the top and sink back down",
      "• The process repeats until the tablet is used up"
    ],
    scientificExplanation: 
      "This experiment demonstrates density, polarity, and chemical reactions. Water and oil don't mix because of their different densities and molecular structures. The Alka-Seltzer creates carbon dioxide bubbles that carry colored water upward through the oil. When the bubbles pop, the denser water sinks back down.",
    realWorldApplications: [
      "Oil spill cleanup methods",
      "Beverage manufacturing",
      "Cosmetics production",
      "Food science and cooking",
      "Industrial separation processes"
    ],
    funFacts: [
      "The original lava lamp was invented in 1963",
      "Oil and water don't mix because water molecules are polar while oil molecules are non-polar",
      "This principle is used in salad dressings - that's why you have to shake them!",
      "The same concept helps explain why some stains are hard to clean with just water"
    ]
  }
};

export default experiment;