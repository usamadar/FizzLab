import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getExperimentStatus, resetExperimentStatus } from '@/src/utils/storage';
import { getExperiment } from '@/src/experiments';
import { materialsData } from '@/src/materials/data/materials-info';
import { MaterialInfoModal } from '@/src/components/modals/MaterialInfoModal';
import { MaterialInfo } from '@/src/types/material';

export default function ExperimentDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const experiment = getExperiment(id as string);
  const [stepComplete, setStepComplete] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [lastCompletedAt, setLastCompletedAt] = useState<Date | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialInfo | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(() => {
    const checkCompletionStatus = async () => {
      const status = await getExperimentStatus(id as string);
      if (status?.isCompleted) {
        setIsCompleted(true);
        if (status.lastCompletedAt) {
          setLastCompletedAt(new Date(status.lastCompletedAt));
        }
      }
    };
    checkCompletionStatus();
  }, [id]);

  const getMaterialInfo = (materialName: string): MaterialInfo | null => {
    const materialId = materialName.toLowerCase().replace(/[\s-]/g, '_');
    return materialsData[materialId] || null;
  };

  if (!experiment) {
    return <View style={styles.container}><Text>Experiment not found</Text></View>;
  }

  if (isCompleted) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.completedBanner}>
            <Ionicons name="checkmark-circle" size={80} color="#4CAF50" />
            <Text style={styles.completedTitle}>Experiment Completed!</Text>
            {lastCompletedAt && (
              <Text style={styles.completedDate}>
                Completed on {lastCompletedAt.toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </Text>
            )}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.button, styles.primaryButton]}
              onPress={() => router.push(`/experiment/${id}/result`)}
            >
              <Text style={styles.buttonText}>View Results</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.secondaryButton]}
              onPress={async () => {
                await resetExperimentStatus(id as string);
                setIsCompleted(false);
                setLastCompletedAt(null);
              }}
            >
              <Text style={styles.buttonText}>Try Again</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.button, styles.tertiaryButton]}
              onPress={() => router.back()}
            >
              <Text style={[styles.buttonText, styles.tertiaryButtonText]}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{experiment.title}</Text>
        <Text style={styles.description}>{experiment.description}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Materials Needed:</Text>
          {experiment.materials.map((material, index) => {
            const materialInfo = getMaterialInfo(material.name);
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.materialItem,
                  materialInfo && styles.materialItemWithInfo
                ]}
                onPress={() => {
                  if (materialInfo) {
                    setSelectedMaterial(materialInfo);
                    setModalVisible(true);
                  }
                }}
              >
                <Ionicons name={material.icon as any} size={24} color="#007AFF" />
                <View style={styles.materialText}>
                  <Text style={styles.materialName}>
                    {material.name}
                    {materialInfo && (
                      <Ionicons name="information-circle" size={16} color="#007AFF" />
                    )}
                  </Text>
                  <Text style={styles.materialAmount}>{material.amount}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Steps:</Text>
          {experiment.steps.map((step, index) => (
            <TouchableOpacity 
              key={index}
              style={[styles.step, stepComplete > index && styles.stepCompleted]}
              onPress={() => setStepComplete(index + 1)}
            >
              <Ionicons 
                name={stepComplete > index ? "checkmark-circle" : "radio-button-off"} 
                size={24} 
                color={stepComplete > index ? "#4CAF50" : "#666"}
              />
              <Text style={styles.stepText}>{step}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Safety Notes:</Text>
          {experiment.safetyNotes.map((note, index) => (
            <View key={index} style={styles.safetyNote}>
              <Ionicons name="warning-outline" size={20} color="#FFA000" />
              <Text style={styles.safetyText}>{note}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={[styles.button, stepComplete === experiment.steps.length && styles.buttonReady]}
          onPress={() => stepComplete === experiment.steps.length && router.push(`/experiment/${id}/result`)}
        >
          <Text style={styles.buttonText}>
            {stepComplete === experiment.steps.length ? "See Results!" : "Complete All Steps"}
          </Text>
        </TouchableOpacity>
      </View>
      {selectedMaterial && (
        <MaterialInfoModal
          material={selectedMaterial}
          visible={modalVisible}
          onClose={() => {
            setModalVisible(false);
            setSelectedMaterial(null);
          }}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  materialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  materialText: {
    marginLeft: 12,
  },
  materialName: {
    fontSize: 16,
    fontWeight: '500',
  },
  materialAmount: {
    fontSize: 14,
    color: '#666',
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  stepCompleted: {
    backgroundColor: '#E8F5E9',
  },
  stepText: {
    marginLeft: 12,
    fontSize: 16,
  },
  safetyNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3E0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  safetyText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#F57C00',
  },
  button: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonReady: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  completedBanner: {
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
  },
  completedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  completedDate: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#4CAF50',
  },
  secondaryButton: {
    backgroundColor: '#FF9800',
  },
  tertiaryButton: {
    backgroundColor: '#E0E0E0',
  },
  tertiaryButtonText: {
    color: '#333',
  },
  materialItemWithInfo: {
    borderColor: '#007AFF',
    borderWidth: 1,
  },
}); 