import React from 'react';
import { Modal, View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialInfo } from '@/src/types/material';
import { useState } from 'react';

interface MaterialInfoModalProps {
  material: MaterialInfo;
  visible: boolean;
  onClose: () => void;
}

export function MaterialInfoModal({ material, visible, onClose }: MaterialInfoModalProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color="#666" />
          </TouchableOpacity>

          <ScrollView>
            <Text style={styles.materialName}>{material.name}</Text>
            {material.imageUrl && !imageError && (
              <Image 
                source={
                  typeof material.imageUrl === 'string' 
                    ? { uri: material.imageUrl } 
                    : material.imageUrl
                } 
                style={styles.materialImage}
                resizeMode="contain"
                onError={() => setImageError(true)}
              />
            )}
            <Text style={styles.description}>{material.description}</Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Common Uses:</Text>
              {material.commonUses.map((use, index) => (
                <View key={index} style={styles.listItem}>
                  <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                  <Text style={styles.listText}>{use}</Text>
                </View>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Where to Find:</Text>
              <Text style={styles.whereToFind}>{material.whereToFind}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Tips:</Text>
              {(material.tips ?? []).map((tip, index) => (
                <View key={index} style={styles.listItem}>
                  <Ionicons name="bulb-outline" size={20} color="#FFA000" />
                  <Text style={styles.listText}>{tip}</Text>
                </View>
              ))}
            </View>

            {(material.alternatives ?? []).length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Alternatives:</Text>
                {(material.alternatives ?? []).map((alt, index) => (
                  <View key={index} style={styles.listItem}>
                    <Ionicons name="swap-horizontal" size={20} color="#2196F3" />
                    <Text style={styles.listText}>{alt}</Text>
                  </View>
                ))}
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  materialName: {
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
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  listText: {
    marginLeft: 10,
    fontSize: 16,
  },
  whereToFind: {
    fontSize: 16,
    color: '#666',
  },
  materialImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
}); 