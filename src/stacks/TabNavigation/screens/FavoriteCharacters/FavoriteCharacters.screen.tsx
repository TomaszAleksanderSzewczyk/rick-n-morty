import React from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useAtom} from 'jotai';
import {styles} from './FavoriteCharacters.styled';
import {favoritesAtom, removeFromFavorites} from '../../../../atoms/favorites';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
import {Character, fetchCharacterById} from '../../../../api/character';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import CharacterCard from '../../../../components/CharacterCard/CharacterCard';
import {SafeAreaConsumer} from 'react-native-safe-area-context';

const FavoriteCharactersScreen = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  const {data: favoriteCharacters = [], refetch} = useQuery({
    queryKey: ['favoriteCharacters', favorites],
    queryFn: async () => {
      if (favorites.length === 0) return [];
      const characters = await Promise.all(
        favorites.map(id => fetchCharacterById(id).catch(() => null)),
      );
      return characters.filter(
        (character): character is Character => character !== null,
      );
    },
    enabled: favorites.length > 0,
  });

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch]),
  );

  const handleRemoveFavorite = (id: number) => {
    removeFromFavorites(id, setFavorites, favorites);
  };

  const navigateToCharacterDetails = (id: number) => {
    navigation.navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: {id},
    });
  };

  if (favorites.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noFavoritesText}>No favorite characters yet</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Favorite Characters</Text>
      <FlatList
        data={favoriteCharacters}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.cardWrapper}>
            <TouchableOpacity
              onPress={() => navigateToCharacterDetails(item.id)}>
              <CharacterCard
                character={item}
                onLikeToggle={handleRemoveFavorite}
                liked={true}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default FavoriteCharactersScreen;
