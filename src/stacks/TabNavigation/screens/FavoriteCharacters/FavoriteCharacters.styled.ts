import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2C3E34',
  },
  noFavoritesText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  characterImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  characterInfo: {
    flex: 1,
    marginLeft: 12,
  },
  characterName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E34',
  },
  characterSpecies: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  removeButton: {
    padding: 8,
  },
  cardWrapper: {
    marginBottom: 16,
  },
});
