// @flow

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
  menuContainer: {
    flex: 1,
    paddingTop: Metrics.baseMargin
  },
  closeTabBtn: {
    color: Colors.barambeYellow
  }
})
