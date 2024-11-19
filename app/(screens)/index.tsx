import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { getExperimentStatus } from '@/src/utils/storage';
import { useFocusEffect } from '@react-navigation/native';
import { getExperimentsList } from '@/src/experiments';
import { ExperimentStatus } from '@/src/types/experiment';

// Define the experiment type
type Experiment = {
  id: string;
  title: string;
  image: any;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: string;
};

const experiments = getExperimentsList().sort((a, b) => {
  const difficultyOrder = {
    'Easy': 1,
    'Medium': 2,
    'Hard': 3
  };
  
  // First compare by difficulty
  const difficultyComparison = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
  
  // If same difficulty, compare by ID
  if (difficultyComparison === 0) {
    return parseInt(a.id) - parseInt(b.id);
  }
  
  return difficultyComparison;
});

// Add this near the top of the file
const completedExperimentsCount = (statuses: {[key: string]: boolean}) => 
  Object.values(statuses).filter(status => status).length;

// Removing unused type definition

const getExperimentStats = (statuses: {[key: string]: ExperimentStatus}) => {
  let completed = 0;
  let inProgress = 0;
  
  Object.values(statuses).forEach(status => {
    if (status.isCompleted) {
      completed++;
    } else if (status.completedSteps?.length > 0) {
      inProgress++;
    }
  });
  
  return { completed, inProgress };
};

export default function HomeScreen() {
  const [completionStatus, setCompletionStatus] = useState<{[key: string]: ExperimentStatus}>({});

  const loadCompletionStatus = async () => {
    const statuses: {[key: string]: ExperimentStatus} = {};
    for (const exp of experiments) {
      const status = await getExperimentStatus(exp.id);
      statuses[exp.id] = status || { isCompleted: false, completedSteps: [] };
    }
    setCompletionStatus(statuses);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadCompletionStatus();
    }, [])
  );

  // Get gradient colors based on difficulty
  const getGradientColors = (difficulty: string): [string, string] => {
    switch(difficulty.toLowerCase()) {
      case 'easy':
        return ['#4CAF50', '#81C784'];
      case 'medium':
        return ['#FF9800', '#FFB74D'];
      case 'hard':
        return ['#F44336', '#E57373'];
      default:
        return ['#ffffff', '#f8f8f8'];
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <LinearGradient
          colors={['#6366F1', '#8B5CF6']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroGradient}
        >
          <View style={styles.heroContent}>
            <View style={styles.heroTextContainer}>
              <Text style={styles.heroTitle}>Ready to get Fizzical?</Text>
              <Text style={styles.heroSubtitle}>
                Discover the magic of science through fun experiments! 🧪
              </Text>
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>
                  {getExperimentStats(completionStatus).completed}
                </Text>
                <Text style={styles.statLabel}>Completed</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>
                  {getExperimentStats(completionStatus).inProgress}
                </Text>
                <Text style={styles.statLabel}>In Progress</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{experiments.length}</Text>
                <Text style={styles.statLabel}>Total</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
      <FlatList
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        data={experiments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/experiment/${item.id}`} asChild>
            <TouchableOpacity>
              <LinearGradient
                colors={getGradientColors(item.difficulty)}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradientCard}
              >
                <Image 
                  source={item.image} 
                  style={styles.image}
                  resizeMode="cover"
                />
                <View style={styles.cardContent}>
                  <Text style={[styles.cardTitle, { color: '#fff' }]}>
                    {item.title}
                  </Text>
                  <Text style={[styles.cardSubtitle, { color: '#fff' }]}>
                    Tap to start →
                  </Text>
                  <View style={styles.cardMeta}>
                    <View style={[styles.difficultyBadge, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
                      <Text style={styles.badgeText}>{item.difficulty}</Text>
                    </View>
                    <Text style={[styles.duration, { color: '#fff' }]}>
                      {item.duration}
                    </Text>
                  </View>
                  {completionStatus[item.id]?.isCompleted && (
                    <View style={styles.completionBadge}>
                      <Ionicons 
                        name="checkmark-circle" 
                        size={24} 
                        color="#4CAF50" 
                      />
                    </View>
                  )}
                  {!completionStatus[item.id]?.isCompleted && completionStatus[item.id]?.completedSteps?.length > 0 && (
                    <View style={styles.inProgressBadge}>
                      <Ionicons 
                        name="time" 
                        size={24} 
                        color="#FF9800" 
                      />
                    </View>
                  )}
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16,
    backgroundColor: '#f8f8f8' 
  },
  heroSection: {
    marginBottom: 20,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  heroGradient: {
    width: '100%',
  },
  heroContent: {
    padding: 20,
  },
  heroTextContainer: {
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 22,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 12,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 16,
  },
  listContainer: {
    paddingBottom: 20,
  },
  gradientCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16,
    marginBottom: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: { 
    width: 100, 
    height: 100, 
    marginRight: 16, 
    borderRadius: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: { 
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  cardMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 10,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  duration: {
    fontSize: 12,
  },
  completionBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 12,
    padding: 4,
  },
  inProgressBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 12,
    padding: 4,
  },
}); 