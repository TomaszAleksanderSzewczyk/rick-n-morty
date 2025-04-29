import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import {useCharacters} from '../../../../hooks/useCharacters';
import CharacterCard from '../../../../components/CharacterCard/CharacterCard';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import {styles} from './CharacterList.styled';
import {MaterialIcons} from '@expo/vector-icons';
import Filter from '../../../../components/Filter/Filter';
import {useAtom} from 'jotai';
import {
  favoritesAtom,
  addToFavorites,
  removeFromFavorites,
} from '../../../../atoms/favorites';

const logo = require('../../../../../assets/logo.png');

const CharacterListScreen: React.FC = () => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const [search, setSearch] = useState<string>('');
  const [input, setInput] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [filters, setFilters] = useState<{status?: string; species?: string}>(
    {},
  );
  const [favorites, setFavorites] = useAtom(favoritesAtom);

  useEffect(() => {
    const handler = setTimeout(() => setSearch(input), 500);
    return () => clearTimeout(handler);
  }, [input]);

  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useCharacters(search, filters.status, filters.species);

  const characters = data?.pages.flatMap(page => page.results) ?? [];
  const toggleFavorite = (id: number) => {
    const isFavorite = favorites.includes(id);
    const character = characters.find(char => char.id === id);

    if (!character) return;

    if (isFavorite) {
      removeFromFavorites(id, setFavorites, favorites);
    } else {
      addToFavorites(character, setFavorites, favorites);
    }
  };

  const navigateToCharacterDetails = (id: number) => {
    navigation.navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: {id},
    });
  };
  if (isLoading && !data) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>

      <Text style={styles.screenTitle}>Characters</Text>

      <SearchBar
        value={search}
        onChangeText={text => setSearch(text)}
        onSubmitEditing={() => refetch()}
        placeholder="Search the characters"
      />
      <Pressable
        style={styles.filterButton}
        onPress={() => setFilterVisible(prev => !prev)}>
        {filterVisible && (
          <Filter
            visible={true}
            onClose={() => setFilterVisible(false)}
            onApply={newFilters => {
              setFilters(newFilters);
              refetch();
            }}
            initialFilters={filters}
          />
        )}
        <Text style={styles.filterText}>FILTER</Text>
        <MaterialIcons
          name={filterVisible ? 'arrow-drop-up' : 'arrow-drop-down'}
          size={20}
          style={styles.filterIcon}
        />
      </Pressable>
      {characters.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No characters found.</Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={characters}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigateToCharacterDetails(item.id)}>
              <CharacterCard
                character={item}
                onLikeToggle={toggleFavorite}
                liked={favorites.includes(item.id)}
              />
            </TouchableOpacity>
          )}
          onEndReached={() => {
            if (hasNextPage) fetchNextPage();
          }}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingNextPage ? (
              <ActivityIndicator style={{margin: 16}} />
            ) : null
          }
        />
      )}
    </View>
  );
};

export default CharacterListScreen;
