import AsyncStorage from '@react-native-async-storage/async-storage';
import { ExperimentStore, ExperimentStatus } from '@/src/types/experiment';

const STORAGE_KEY = '@experiment_status';

export const getExperimentStatus = async (experimentId: string): Promise<ExperimentStatus | null> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data) {
      const store: ExperimentStore = JSON.parse(data);
      return store[experimentId] || null;
    }
    return null;
  } catch (error) {
    console.error('Error getting experiment status:', error);
    return null;
  }
};

export const setExperimentStatus = async (experimentId: string, status: ExperimentStatus) => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    const store: ExperimentStore = data ? JSON.parse(data) : {};
    store[experimentId] = status;
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch (error) {
    console.error('Error setting experiment status:', error);
  }
};

export const resetExperimentStatus = async (experimentId: string) => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data) {
      const store: ExperimentStore = JSON.parse(data);
      delete store[experimentId];
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    }
  } catch (error) {
    console.error('Error resetting experiment status:', error);
  }
}; 