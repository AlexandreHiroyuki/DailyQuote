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

  headerText: {
    fontSize: 14,
    color: '#211a05',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    marginBottom: 14,
    marginTop: 36,
    fontWeight: 'bold',
    color: '#1c1500',
  },

  quoteList: {
    marginTop: 28,
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
