import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

interface OnboardingStep {
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  image?: any;
  gradient: [string, string];
}

const onboardingSteps: OnboardingStep[] = [
  {
    title: "Welcome to FizzLab! 🧪",
    description: "Get ready to explore amazing science experiments right from your home. Let's show you around!",
    icon: "flask",
    gradient: ['#6366F1', '#8B5CF6'],
  },
  {
    title: "Browse Experiments",
    description: "Explore experiments sorted by difficulty. Green for easy, orange for medium, and red for challenging ones.",
    icon: "list",
    gradient: ['#4CAF50', '#81C784'],
  },
  {
    title: "Track Progress",
    description: "See your completed and in-progress experiments at a glance. Green checkmarks show completed ones!",
    icon: "checkmark-circle",
    gradient: ['#FF9800', '#FFB74D'],
  },
  {
    title: "Material Info",
    description: "Tap on materials with an info icon to learn more about them and find alternatives.",
    icon: "information-circle",
    gradient: ['#F44336', '#E57373'],
  },
  {
    title: "Step by Step",
    description: "Follow clear instructions and mark steps as complete as you go. Safety first!",
    icon: "footsteps",
    gradient: ['#2196F3', '#64B5F6'],
  },
];

interface OnboardingModalProps {
  visible: boolean;
  onClose: () => void;
}

export function OnboardingModal({ visible, onClose }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(0);
      onClose();
    }
  };

  const step = onboardingSteps[currentStep];

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={step.gradient}
          style={styles.content}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={onClose}
          >
            <Ionicons name="close" size={24} color="#fff" />
          </TouchableOpacity>

          <View style={styles.stepIndicator}>
            {onboardingSteps.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentStep && styles.activeDot
                ]}
              />
            ))}
          </View>

          <Ionicons 
            name={step.icon} 
            size={80} 
            color="#fff" 
            style={styles.icon}
          />

          <Text style={styles.title}>{step.title}</Text>
          <Text style={styles.description}>{step.description}</Text>

          <TouchableOpacity 
            style={styles.nextButton}
            onPress={handleNext}
          >
            <Text style={styles.nextButtonText}>
              {currentStep === onboardingSteps.length - 1 ? "Get Started" : "Next"}
            </Text>
            <Ionicons 
              name="arrow-forward" 
              size={20} 
              color="#fff" 
              style={styles.nextIcon}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: width * 0.9,
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
  },
  stepIndicator: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 24,
  },
  icon: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  nextIcon: {
    marginLeft: 8,
  },
}); 