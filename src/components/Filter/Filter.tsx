import React, {useState, useEffect} from 'react';
import {View, Text, Modal, Pressable, ScrollView} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {styles} from './Filter.styled';

interface FilterProps {
  visible: boolean;
  onClose: () => void;
  onApply: (filters: {status?: string; species?: string}) => void;
  initialFilters?: {status?: string; species?: string};
}

const STATUS_OPTIONS = ['alive', 'dead', 'unknown'];
const SPECIES_OPTIONS = [
  'human',
  'alien',
  'humanoid',
  'poopybutthole',
  'mythological',
  'unknown',
  'animal',
  'robot',
  'cronenberg',
  'disease',
];

const Filter: React.FC<FilterProps> = ({
  visible,
  onClose,
  onApply,
  initialFilters = {},
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string | undefined>(
    initialFilters.status,
  );
  const [selectedSpecies, setSelectedSpecies] = useState<string | undefined>(
    initialFilters.species,
  );

  useEffect(() => {
    setSelectedStatus(initialFilters.status);
    setSelectedSpecies(initialFilters.species);
  }, [initialFilters]);

  const selectStatus = (status: string) => {
    setSelectedStatus(selectedStatus === status ? undefined : status);
  };

  const selectSpecies = (species: string) => {
    setSelectedSpecies(selectedSpecies === species ? undefined : species);
  };

  const resetFilters = () => {
    setSelectedStatus(undefined);
    setSelectedSpecies(undefined);
  };

  const applyFilters = () => {
    onApply({
      status: selectedStatus,
      species: selectedSpecies,
    });
    onClose();
  };

  const formatOption = (option: string) => {
    return option.charAt(0).toUpperCase() + option.slice(1);
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Pressable style={styles.backdrop} onPress={onClose} />
      <View style={styles.modalContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>Status</Text>
          {STATUS_OPTIONS.map(option => (
            <Pressable
              key={option}
              style={[
                styles.optionRow,
                selectedStatus === option && styles.optionSelected,
              ]}
              onPress={() => selectStatus(option)}>
              <MaterialIcons
                name={
                  selectedStatus === option
                    ? 'radio-button-checked'
                    : 'radio-button-unchecked'
                }
                size={20}
                style={styles.checkboxIcon}
              />
              <Text style={styles.optionText}>{formatOption(option)}</Text>
            </Pressable>
          ))}

          <Text style={styles.sectionTitle}>Species</Text>
          {SPECIES_OPTIONS.map(option => (
            <Pressable
              key={option}
              style={[
                styles.optionRow,
                selectedSpecies === option && styles.optionSelected,
              ]}
              onPress={() => selectSpecies(option)}>
              <MaterialIcons
                name={
                  selectedSpecies === option
                    ? 'radio-button-checked'
                    : 'radio-button-unchecked'
                }
                size={20}
                style={styles.checkboxIcon}
              />
              <Text style={styles.optionText}>{formatOption(option)}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={styles.buttonRow}>
          <Pressable
            style={[styles.actionButton, styles.resetButton]}
            onPress={resetFilters}>
            <Text style={styles.resetText}>Reset</Text>
          </Pressable>
          <Pressable
            style={[styles.actionButton, styles.applyButton]}
            onPress={applyFilters}>
            <Text style={styles.applyText}>Apply</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default Filter;
