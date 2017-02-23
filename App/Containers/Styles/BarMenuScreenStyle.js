// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  menuHeaderImage: {
    position: 'relative',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 150
  }
})
