import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  navBar: {
    width: '100%',
    height: 60,
    backgroundColor: '#2C3E34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    left: 16,
    top: 40,
    width: 120,
    height: 40,
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: '500',
    color: '#132118',
    marginVertical: 16,
    marginLeft: 16,
    paddingTop: 30,
    alignSelf: 'flex-start',
  },
  filterRow: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  filterButton: {
    backgroundColor: '#224229',
    paddingVertical: 8,
    flexDirection: 'row',
    marginLeft: 16,
    paddingHorizontal: 16,
    borderRadius: 100,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  filterText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
  },
  filterIcon: {
    color: '#FFFFFF',
    marginLeft: 8,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888888',
  },
});
