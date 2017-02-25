// @flow

import React from 'react'
import { TouchableOpacity, Text, View, ScrollView } from 'react-native'
import {SlideButton, SlideDirection} from 'react-native-slide-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/MenuFullButtonStyle'
import { Colors, Metrics } from '../Themes'

export default class FullButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hideSlider: true
    }
    this.itemClicked = this.itemClicked.bind(this)
    this.removeConfirmSlider = this.removeConfirmSlider.bind(this)
  }

  itemClicked (item) {
    console.log('itemClicked')
    if (this.props.price) {
      const obj = Object.assign(this.state, {})
      obj.hideSlider = false
      this.setState(obj)
    } else {
      this.props.onClickedItem(this.props.item)
    }
  }

  onSlide () {
    console.log('onSlide invoked')
    this.setState({ hideSlider: true })
  }

  removeConfirmSlider () {
    console.log('removeConfirmSlider')
    this.setState({ hideSlider: true })
  }

  render () {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={() => { this.itemClicked(this.props.item) }}>
        {this.state.hideSlider
        ? <Text style={styles.buttonText}> {this.props.text && this.props.text}</Text> : null}
        {this.props.price && this.state.hideSlider
        ? <Text style={styles.priceText}> {this.props.price} </Text>
        : this.state.hideSlider
        ? <Text style={styles.chevronRight}> <Icon name='angle-right' size={Metrics.icons.small} color={Colors.barambeGrey} /> </Text>
        : <View style={{backgroundColor: Colors.barambeBlue, width: Metrics.screenWidth, height: 35}} onAccessibilityTap={this.onSlide.bind(this)}>
          <TouchableOpacity onPress={this.removeConfirmSlider} >
            <Icon name='close' size={Metrics.icons.tiny} color={Colors.barambeGrey} />
          </TouchableOpacity>
          <SlideButton
            width={Metrics.screenWidth}
            height={50}
            onSlideSuccess={this.onSlide.bind(this)}
            slideDirection={SlideDirection.RIGHT}
            style={{marginLeft: 50, marginVertical: -8}}
          >
            <ScrollView contentContainerStyle={styles.slideView}>
              <Text style={styles.slideText}>Slide Right to Confirm Order</Text>
            </ScrollView>
          </SlideButton>
        </View>}
      </TouchableOpacity>
    )
  }
}
