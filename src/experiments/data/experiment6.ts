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
    { name: "Small Bowl", amount: "1", icon: "bowl-outline" },
    { name: "Water", amount: "2 tablespoons", icon: "water-outline" }
  ],
  steps: [
    "Mix equal parts lemon juice and water in bowl",
    "Dip cotton swab in mixture",
    "Write or draw on white paper",
    "Let the paper dry completely",
    "Hold paper near (not too close) to heat source",
    "Watch your message appear in brown color",
    "Try different messages and drawings",
    "Compare results with different heat distances"
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