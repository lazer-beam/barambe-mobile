// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'
const WIDTH_OF_FULL_BUTTON = Number((Metrics.screenWidth * 0.7).toPrecision(1))

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    borderTopColor: Colors.barambeGrey,
    borderBottomColor: Colors.barambeGrey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonText: {
    marginVertical: 8,
    color: Colors.barambeGrey,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    width: WIDTH_OF_FULL_BUTTON,
    paddingLeft: 15
  },
  chevronRight: {
    backgroundColor: Colors.transparent,
    color: Colors.barambeGrey
  },
  priceText: {
    fontSize: Fonts.size.small,
    color: Colors.barambeYellow
  },
  slideView: {
    height: 20,
    width: Metrics.screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  xIcon: {
    right: 35,
    bottom: 5
  },
  closeTabBtn: {
    backgroundColor: Colors.barambeGrey
  },
  slideText: {
    color: Colors.barambeGrey,
    right: 50
  }
})
