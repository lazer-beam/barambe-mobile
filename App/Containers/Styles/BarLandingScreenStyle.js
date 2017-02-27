// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  currentCard: {
    flexDirection: 'row',
    height: 25,
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20
  },
  headerImage: {
    position: 'relative',
    top: 10,
    left: 0,
    bottom: 10,
    right: 0,
    height: 150
  },
  tableInfo: {
    height: 25,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 5
  },
  barHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#C5C1C0'
  }
})