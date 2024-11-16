import experiment1 from './data/experiment1';
import experiment2 from './data/experiment2';
import experiment3 from './data/experiment3';
import experiment4 from './data/experiment4';
import experiment5 from './data/experiment5';
import experiment6 from './data/experiment6';
import experiment7 from './data/experiment7';
import experiment8 from './data/experiment8';
import experiment9 from './data/experiment9';
import experiment10 from './data/experiment10';
// Import other experiments as they're created

export const experiments = [
  experiment1,
  experiment2,
  experiment3,
  experiment4,
  experiment5,
  experiment6,
  experiment7,
  experiment8,
  experiment9,
  experiment10

  // Add other experiments
];

export const getExperiment = (id: string) => 
  experiments.find(exp => exp.id === id);

export const getExperimentResults = (id: string) => 
  experiments.find(exp => exp.id === id)?.results;

export const getExperimentsList = () => experiments.map(({ id, title, image, difficulty, duration }) => ({
  id,
  title,
  image,
  difficulty,
  duration
}));
