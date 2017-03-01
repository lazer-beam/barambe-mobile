import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  barLandingContainer:{
      flex: 1,
      marginTop: Metrics.BarMenuTopMargin,
      backgroundColor: '#1A2930'
    },
  currentCard: {
    flexDirection: 'row',
    height: 25,
    width: 300,
    justifyContent: 'space-between',
    marginTop: 10
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
    marginTop: 50,
    paddingTop: 5,
    borderTopWidth: 0.5,
    borderTopColor: '#C5C1C0' 
  },
  barHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#C5C1C0'
  },
  changeCardBtn: {
    height: 40,
    width: 115,
    marginTop: 5
  }
})