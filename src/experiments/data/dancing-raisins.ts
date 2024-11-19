import { CompleteExperiment } from '@/src/types/experiment';

const experiment: CompleteExperiment = {
  id: "5",
  title: "Dancing Raisins",
  image: require('@/assets/images/dancing_raisins.jpeg'),
  difficulty: 'Easy',
  duration: '10 minutes',
  description: "Watch raisins dance up and down as they get lifted by bubbles! Use either carbonated water or create your own bubbles with baking soda and vinegar.",
  materials: [
    { name: "Raisins", amount: "10-12", icon: "nutrition-outline" },
    { name: "Tall Clear Glass", amount: "1", icon: "beer-outline" },
    { name: "Carbonated Water or Baking Soda and Vinegar mix", amount: "2 cups", icon: "water-outline" },

  ],
  steps: [
    "Choose your bubble source: carbonated water OR water with baking soda and vinegar",
    "If using carbonated water: pour it into the glass",
    "If using plain water: fill glass halfway, add baking soda, stir, then add vinegar",
    "Drop a few raisins into the bubbly liquid",
    "Watch as the raisins start to move up and down",
    "Add more raisins to see different patterns",
    "Observe how long the dancing continues"
  ],
  safetyNotes: [
    "Adult supervision recommended",
    "Don't drink the water after experiment",
    "Be careful with glass containers",
    "Clean up any spills immediately",
    "Wash hands after handling raisins",
    "Keep vinegar away from eyes"
  ],
  results: {
    reaction: [
      "When raisins enter the bubbly liquid:",
      "• Bubbles attach to raisin surfaces",
      "• Raisins float up to the surface",
      "• Bubbles pop, raisins sink again",
      "• Process repeats creating a dance"
    ],
    scientificExplanation: 
      "This demonstrates density and buoyancy! Carbon dioxide bubbles (either from carbonated water or the baking soda-vinegar reaction) attach to the wrinkled surface of the raisins. As bubbles accumulate, they make the raisins buoyant enough to float. At the surface, bubbles pop, making the raisins sink again.",
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
      "Some deep-sea creatures use similar principles to move",
      "Both methods create the same gas: carbon dioxide (CO2)"
    ]
  }
};

export default experiment;