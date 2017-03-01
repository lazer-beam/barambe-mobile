import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  nearbyBarsContainer:{
      flex: 1,
      marginTop: Metrics.BarMenuTopMargin,
      backgroundColor: '#1A2930'
    },
  menuHeaderImage: {
    position: 'relative',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 150
  },
  barHeader: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#C5C1C0'
  },
  menuContainer: {
    flex: 1,
    paddingTop: Metrics.baseMargin
  },
  closeTabBtn: {
    color: Colors.barambeYellow
  },
  listedBar: {
    width: 300,
    height: 30,
    alignSelf: 'center',
    borderTopWidth: 1,
    borderTopColor: '#C5C1C0', 
    marginBottom: 30,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerImage: {
    position: 'relative',
    top: 10,
    left: 0,
    bottom: 10,
    right: 0,
    height: 150,
  },
})