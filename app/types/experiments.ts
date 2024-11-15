export type ExperimentStatus = {
  isCompleted: boolean;
  lastCompletedAt?: Date;
};

export type ExperimentStore = {
  [key: string]: ExperimentStatus;
}; 