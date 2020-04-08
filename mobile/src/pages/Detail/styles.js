import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 12,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  quoteList: {
    marginTop: 16,
  },

  quote: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  quoteTitle: {
    fontSize: 18,
    color: '#1c1500',
    fontWeight: 'bold',
    marginBottom: 12,
  },

  quoteMsg: {
    marginLeft: 4,
    marginTop: 2,
    marginBottom: 8,
    color: '#211a05',
    fontSize: 15,
  },

  quoteSign: {
    color: '#211a05',
    opacity: 0.5,
    marginTop: 2,
    marginBottom: 6,
    fontSize: 14,
  },

  detailsButton: {
    flexDirection: 'row',
  },

  detailsButtonText: {
    marginLeft: 4,
    color: '#785d13',
    fontSize: 14,
  },
})
