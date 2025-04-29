import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const CARD_WIDTH = width - 32;
export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginVertical: 12,
  },
  cardContainer: {
    width: CARD_WIDTH,
    flexDirection: 'row',
    backgroundColor: '#F4F6F5',
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: '#224229',
    shadowColor: '#224229',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  infoContainer: {
    flex: 1,
    width: 114,
    height: 165,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 12,
    color: '#4A5A52',
    letterSpacing: 0.5,
    marginBottom: 2,
    height: 16,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    color: '#132118',
    marginBottom: 12,
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
    color: '#2E362F',

    marginBottom: 8,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 16,
    marginLeft: 12,
    borderWidth: 1,
    alignSelf: 'center',
  },
  likeButton: {
    position: 'absolute',
    bottom: 23,
    right: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    width: 82,
    height: 34,
    borderColor: '#2C3E34',
  },
  likedButton: {
    backgroundColor: '#2C3E34',
    borderColor: '#2C3E34',
  },
  buttonPressed: {
    opacity: 0.9,
  },
  likeIcon: {
    color: '#224229',
  },
  likedIcon: {
    color: '#F89F34',
  },
  likeText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#2C3E34',
  },
  likedText: {
    color: '#FFFFFF',
  },
});
