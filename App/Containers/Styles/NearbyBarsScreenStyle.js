import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
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
    width: 250,
    height: 30,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C5C1C0', 
    marginBottom: 20
  }
})