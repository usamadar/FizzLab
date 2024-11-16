import { CompleteExperiment } from '@/src/types/experiment';

const experiment: CompleteExperiment = {
  id: "5",
  title: "Dancing Raisins",
  image: require('@/assets/images/dancing_raisins.jpeg'),
  difficulty: 'Easy',
  duration: '10 minutes',
  description: "Watch raisins dance up and down in carbonated water as they get lifted by bubbles!",
  materials: [
    { name: "Clear Carbonated Water", amount: "2 cups", icon: "water-outline" },
    { name: "Raisins", amount: "10-12", icon: "nutrition-outline" },
    { name: "Tall Clear Glass", amount: "1", icon: "beer-outline" },
    { name: "Spoon", amount: "1", icon: "restaurant-outline" }
  ],
  steps: [
    "Pour the carbonated water into the tall glass",
    "Drop a few raisins into the water",
    "Watch as the raisins start to move up and down",
    "Add more raisins to see different patterns",
    "Observe how long the dancing continues",
    "Try with fresh vs flat carbonated water"
  ],
  safetyNotes: [
    "Adult supervision recommended",
    "Don't drink the water after experiment",
    "Be careful with glass containers",
    "Clean up any spills immediately",
    "Wash hands after handling raisins"
  ],
  results: {
    reaction: [
      "When raisins enter carbonated water:",
      "• Bubbles attach to raisin surfaces",
      "• Raisins float up to the surface",
      "• Bubbles pop, raisins sink again",
      "• Process repeats creating a dance"
    ],
    scientificExplanation: 
      "This demonstrates density and buoyancy! Carbon dioxide bubbles in the water attach to the wrinkled surface of the raisins. As bubbles accumulate, they make the raisins buoyant enough to float. At the surface, bubbles pop, making the raisins sink again.",
    realWorldApplications: [
      "Understanding buoyancy in submarines",
      "Carbonation in beverages",
      "Gas lift pumps in oil wells",
      "Particle separation in industry"
    ],
    funFacts: [
      "The same principle helps fish control their depth",
      "Carbonated drinks contain dissolved CO2 under pressure",
      "Ancient Romans used raisins to test wine quality",
      "Some deep-sea creatures use similar principles to move"
    ]
  }
};

export default experiment;