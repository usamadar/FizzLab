import { CompleteExperiment } from '@/src/types/experiment';

const experiment: CompleteExperiment = {
  id: "6",
  title: "Invisible Ink",
  image: require('@/assets/images/invisible_ink.jpeg'),
  difficulty: 'Easy',
  duration: '20 minutes',
  description: "Create secret messages using lemon juice that become visible when heated!",
  materials: [
    { name: "Lemon Juice", amount: "1/2 cup", icon: "nutrition-outline" },
    { name: "White Paper", amount: "several sheets", icon: "document-outline" },
    { name: "Cotton Swab/Brush", amount: "1", icon: "brush-outline" },
    { name: "Hair Dryer/Lamp", amount: "1", icon: "bulb-outline" },
    { name: "Small Bowl", amount: "1", icon: "cafe-outline" },
    { name: "Water", amount: "2 tablespoons", icon: "water-outline" }
  ],
  steps: [
    "Mix 1/4 cup lemon juice with 1/4 cup water in bowl",
    "Dip cotton swab in mixture (don't oversoak)",
    "Write or draw lightly on white paper (avoid tearing)",
    "Let paper dry completely (5-10 minutes)",
    "Hold paper 6 inches from heat source (lamp or hair dryer)",
    "Move paper slowly near heat until message appears brown",
    "Try different messages and drawings on new paper",
    "Test different heat distances (4-8 inches) for best results"
  ],
  safetyNotes: [
    "Adult supervision required",
    "Keep safe distance from heat source",
    "Don't let paper get too hot",
    "Keep lemon juice away from eyes",
    "Use heat source carefully",
    "Work in well-ventilated area",
    "Don't leave heat source unattended"
  ],
  results: {
    reaction: [
      "When heat is applied:",
      "• Invisible writing starts to appear",
      "• Color changes from clear to brown",
      "• Message becomes permanently visible",
      "• Darker brown with more heat exposure"
    ],
    scientificExplanation: 
      "This demonstrates oxidation! The acid in lemon juice weakens the paper. When heated, the sugars in the lemon juice oxidize before the paper does, turning brown and revealing the message. This is similar to how apples turn brown when cut.",
    realWorldApplications: [
      "Understanding oxidation reactions",
      "Paper conservation techniques",
      "Historical document analysis",
      "Development of security features"
    ],
    funFacts: [
      "This technique was used in the American Revolution for secret messages",
      "Many organic compounds turn brown when oxidized",
      "Heat speeds up chemical reactions",
      "Similar reactions make toast turn brown"
    ]
  }
};

export default experiment;