import { CompleteExperiment } from '@/src/types/experiment';

const experiment: CompleteExperiment = {
  id: "8",
  title: "Cloud in a Jar",
  image: require('@/assets/images/cloud_jar.jpeg'),
  difficulty: 'Hard',
  duration: '20 minutes',
  description: "Create your own miniature cloud and watch it form inside a jar!",
  materials: [
    { name: "Large Glass Jar", amount: "1", icon: "flask-outline" },
    { name: "Ice Cubes", amount: "4-5", icon: "water-outline" },
    { name: "Hot Water", amount: "1 cup", icon: "water-outline" },
    { name: "Metal Plate/Lid", amount: "1", icon: "disc-outline" },
    { name: "Hairspray", amount: "small amount", icon: "color-palette-outline" },
    { name: "Dark Paper", amount: "1 sheet", icon: "document-outline" },
    { name: "Flashlight", amount: "1", icon: "flashlight-outline" }
  ],
  steps: [
    "Pour hot water into the jar (about 1 inch)",
    "Place metal plate on top of jar",
    "Put ice cubes on the plate",
    "Wait 20 seconds for temperature difference",
    "Remove plate briefly and spray hairspray into jar",
    "Quickly replace the plate with ice",
    "Watch cloud form with flashlight",
    "Remove lid to release cloud"
  ],
  safetyNotes: [
    "Adult supervision required",
    "Use caution with hot water",
    "Keep hairspray away from eyes",
    "Use in well-ventilated area",
    "Don't inhale hairspray",
    "Handle glass jar carefully",
    "Keep ice away from hot water"
  ],
  results: {
    reaction: [
      "When the experiment is set up:",
      "• Warm air rises to the top of the jar",
      "• Water vapor forms when warm air hits cold plate",
      "• Hairspray particles act as cloud seeds",
      "• A visible cloud forms and swirls in the jar",
      "• Cloud disappears when lid is removed"
    ],
    scientificExplanation: 
      "This demonstrates the water cycle and cloud formation! When warm, moist air rises and meets cold temperatures, water vapor condenses around tiny particles (like hairspray) in the air. This is called condensation nucleation, and it's exactly how real clouds form in the atmosphere. The hairspray particles act just like dust and other particles in the sky.",
    realWorldApplications: [
      "Weather forecasting",
      "Understanding climate patterns",
      "Cloud seeding technology",
      "Aviation weather planning",
      "Atmospheric science research"
    ],
    funFacts: [
      "An average cloud weighs around 1.1 million pounds",
      "Clouds can travel at speeds over 100 miles per hour",
      "There are 10 main types of clouds in the sky",
      "Some clouds form at ground level - we call them fog",
      "Cloud seeding is used to make rain in some countries"
    ]
  }
};

export default experiment;