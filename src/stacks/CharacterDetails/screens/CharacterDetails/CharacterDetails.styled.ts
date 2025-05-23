import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width - 32;

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  goBackButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
  },
  goBackButtonText: {
    fontSize: 16,
    color: '#4B5E52',
    textDecorationLine: 'underline',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButtonContainer: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#132118',
  },
  headerPlaceholder: {
    width: 32,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: '#2C3E34',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    fontSize: 16,
    color: '#e63946',
    marginBottom: 16,
    textAlign: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C3E34',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  container: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F4F6F5',
  },
  avatar: {
    width: 330,
    height: 310,
    borderRadius: 24,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#2C3E34',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 10,
    fontWeight: '700',
    color: '#4A5A52',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  name: {
    alignSelf: 'flex-start',
    fontSize: 28,
    fontWeight: '700',
    color: '#132118',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: '#F4F6F5',
    borderRadius: 8,
    padding: 12,
    width: (CARD_WIDTH - 16) / 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4A5A52',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2E362F',
  },
  fullWidthCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    width: CARD_WIDTH,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 24,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C3E34',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
    marginBottom: 16,
  },
  likeIcon: {
    color: '#FFFFFF',
    marginRight: 8,
  },
  likeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
