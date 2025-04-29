import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';
import {styles} from './CharacterDetails.styled';
import {MaterialIcons} from '@expo/vector-icons';
import {useAtom} from 'jotai';
import {
  favoritesAtom,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
} from '../../../../atoms/favorites';
import {CharacterDetailsStackParamList} from '../../CharacterDetails.routes';
import {Character, fetchCharacterById} from '../../../../api/character';
import {useQuery} from '@tanstack/react-query';
type CharacterDetailsParams = {
  id: number;
};

type CharacterDetailsRouteProp = RouteProp<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;
const CharacterDetails: React.FC = () => {
  const route = useRoute<CharacterDetailsRouteProp>();
  const navigation = useNavigation();
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: '',
    });
  }, [navigation]);

  const id =
    route.params && typeof route.params === 'object' && 'id' in route.params
      ? (route.params as CharacterDetailsParams).id
      : undefined;

  const {
    data: character,
    isLoading,
    error,
    isFetching,
  } = useQuery<Character>({
    enabled: !!id,
    queryKey: ['character', id],
    queryFn: async () => {
      if (id == null) {
        throw new Error('No character id provided');
      }
      return fetchCharacterById(id);
    },
  });

  const isFavorited = character ? isFavorite(character.id, favorites) : false;
  const toggleFavorite = () => {
    if (!character) return;

    if (isFavorited) {
      removeFromFavorites(character.id, setFavorites, favorites);
    } else {
      addToFavorites(character, setFavorites, favorites);
    }
  };
  const handleGoBack = () => navigation.goBack();
  const GoBackButton = () => (
    <Pressable onPress={handleGoBack} style={styles.goBackButtonContainer}>
      <Text style={styles.goBackButtonText}>← Go back to Characters List</Text>
    </Pressable>
  );

  if (isLoading && isFetching) {
    return (
      <View style={styles.rootContainer}>
        <GoBackButton />
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#2C3E34" />
          <Text style={styles.loadingText}>Loading character details...</Text>
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.errorContainer}>
          <Text style={[styles.errorText, {color: 'red', fontSize: 20}]}>
            Failed to load character details. Please try again.
          </Text>
          <Pressable onPress={handleGoBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  if (!character) {
    return (
      <View style={styles.rootContainer}>
        <GoBackButton />
        <View style={styles.errorContainer}>
          <Text style={[styles.errorText, {color: 'orange', fontSize: 20}]}>
            Character not found.
          </Text>
          <Pressable onPress={handleGoBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>Go Back</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <GoBackButton />
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{uri: character?.image ?? ''}} style={styles.avatar} />

        <Text style={styles.label}>NAME</Text>
        <Text style={styles.name}>{character?.name ?? 'Unknown'}</Text>

        <View style={styles.infoRow}>
          <View style={styles.infoCard}>
            <Text style={styles.cardLabel}>STATUS</Text>
            <Text style={styles.cardValue}>
              {character?.status ?? 'Unknown'}
            </Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.cardLabel}>ORIGIN</Text>
            <Text style={styles.cardValue}>
              {character?.origin?.name ?? 'Unknown'}
            </Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoCard}>
            <Text key={'SPECIES'} style={styles.cardLabel}>
              SPECIES
            </Text>
            <Text style={styles.cardValue}>
              {character?.species ?? 'Unknown'}
            </Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.cardLabel}>GENDER</Text>
            <Text style={styles.cardValue}>
              {character?.gender ?? 'Unknown'}
            </Text>
          </View>
        </View>

        <Pressable style={styles.likeButton} onPress={toggleFavorite}>
          <MaterialIcons
            name={isFavorited ? 'star' : 'star-border'}
            size={20}
            style={[styles.likeIcon, isFavorited && {color: '#FFD700'}]}
          />
          <Text style={styles.likeText}>
            {isFavorited ? 'REMOVE FROM LIKED' : 'ADD TO LIKED'}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default CharacterDetails;
