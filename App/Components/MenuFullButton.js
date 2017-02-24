// @flow

import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/MenuFullButtonStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import { Colors, Metrics } from '../Themes'

// Example
ExamplesRegistry.add('Full Button', () =>
  <FullButton
    text='Hey there'
    onPress={() => window.alert('Full Button Pressed!')}
  />
)

type FullButtonProps = {
  text: string,
  onPress: () => void,
  styles?: Object
}

export default class FullButton extends React.Component {
  props: FullButtonProps
  render () {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
          <Text style={styles.buttonText}>
            {this.props.text && this.props.text.toUpperCase()}
          </Text>
          {this.props.price ? <Text style={styles.priceText}> {this.props.price} </Text>
            : <Text style={styles.chevronRight}> <Icon name='angle-right' size={Metrics.icons.small} color={Colors.barambeGrey} /> </Text>}
      </TouchableOpacity>
    )
  }
}


{/*<Text style={styles.chevronRight}> 
            {this.props.price ? <Text style={styles.priceText}> {this.props.price} </Text>
            : <Icon name='angle-right' size={Metrics.icons.small} color={Colors.snow} />} 
          </Text>*/}