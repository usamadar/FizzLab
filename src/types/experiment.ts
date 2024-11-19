export type Material = {
    name: string;
    amount: string;
    icon: string;
  };
  
  export type ExperimentData = {
    id: string;
    title: string;
    description: string;
    image: any;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    duration: string;
    materials: Material[];
    steps: string[];
    safetyNotes: string[];
  };
  
  export type ExperimentResult = {
    reaction: string[];
    scientificExplanation: string;
    realWorldApplications: string[];
    funFacts: string[];
    keyScientificConcepts?: {
      name: string;
      wikiLink: string;
    }[];
  };
  
  export type CompleteExperiment = ExperimentData & {
    results: ExperimentResult;
  };
  
  export type ExperimentStatus = {
    isCompleted: boolean;
    lastCompletedAt?: Date;
    completedSteps: number[];
  };
  
  export type ExperimentStore = {
    [key: string]: ExperimentStatus;
  }; 