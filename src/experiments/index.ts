import bakingSodaAndVinegar from './data/baking-soda-and-vinegar';
import lavaLamp from './data/lava-lamp';
import rainbowMilk from './data/rainbow-milk';
import crystalGarden from './data/crystal-garden';
import dancingRaisins from './data/dancing-raisins';
import invisibleInk from './data/invisible-ink';
import magneticSlime from './data/magnetic-slime';
import cloudInAJar from './data/cloud-in-a-jar';
import waterRainbow from './data/water-rainbow';
import strawberryDnaExtraction from './data/strawberry-dna-extraction';

export const experiments = [
  bakingSodaAndVinegar,
  lavaLamp,
  rainbowMilk,
  crystalGarden,
  dancingRaisins,
  invisibleInk,
  magneticSlime,
  cloudInAJar,
  waterRainbow,
  strawberryDnaExtraction
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
