// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginVertical: 5,
    borderTopColor: Colors.barambeGrey,
    borderBottomColor: Colors.barambeGrey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.ember
  },
  buttonText: {
    margin: 8,
    textAlign: 'left',
    color: Colors.barambeGrey,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold,
    width: Metrics.screenWidth
  },
  chevron_right: {
    backgroundColor: Colors.transparent,
    color: Colors.barambeGrey
  }
})
