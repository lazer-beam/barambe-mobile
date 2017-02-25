// @flow

import React from 'react'
import { TouchableOpacity, Text, View, ScrollView } from 'react-native'
import {SlideButton, SlideDirection} from 'react-native-slide-button'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './Styles/MenuFullButtonStyle'
import { Colors, Metrics } from '../Themes'
import MenuConfig from '../Config/MenuConfig'

const DOMAIN = MenuConfig.domain
const TEMP_TAB_ID = '2'

export default class FullButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hideSlider: true
    }
    this.itemClicked = this.itemClicked.bind(this)
    this.removeConfirmSlider = this.removeConfirmSlider.bind(this)
    this.onSlide.bind(this)
    this.orderDrink.bind(this)
  }

  itemClicked (item) {
    if (this.props.price) {
      const obj = Object.assign(this.state, {})
      obj.hideSlider = false
      this.setState(obj)
    } else {
      this.props.onClickedItem(this.props.item)
    }
  }

  orderDrink (order) {
    fetch(`${DOMAIN}/orders/addorder/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        drinkName: order.name,
        tabId: TEMP_TAB_ID
      })
    }).then(res => {
      console.log('res', res)
    }).catch(err => {
      console.log('err', err)
    })
  }

  onSlide (order) {
    this.orderDrink(order)
    this.removeConfirmSlider()
    this.setState({ hideSlider: true })
  }

  removeConfirmSlider () {
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
        : <View style={{backgroundColor: Colors.barambeBlue, width: Metrics.screenWidth, height: 35}}>
          <TouchableOpacity onPress={this.removeConfirmSlider} >
            <Icon name='close' size={Metrics.icons.tiny} color={Colors.barambeGrey} />
          </TouchableOpacity>
          <SlideButton
            width={Metrics.screenWidth}
            height={50}
            onSlideSuccess={() => { this.onSlide(this.props.item) }}
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
