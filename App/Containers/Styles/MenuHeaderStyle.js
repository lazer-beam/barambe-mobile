import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerImage: {
      position: 'relative',
      top: 150,
      left: 0,
      bottom: 0,
      right: 0
    }
})