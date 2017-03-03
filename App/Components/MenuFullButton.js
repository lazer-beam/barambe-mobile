// @flow

import React from 'react'
import { TouchableOpacity, Text, View, ScrollView } from 'react-native'
import {SlideButton, SlideDirection} from 'react-native-slide-button'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import CustomerActions from '../Redux/CustomerRedux'
import styles from './Styles/MenuFullButtonStyle'
import { Colors, Metrics } from '../Themes'
import MenuConfig from '../Config/MenuConfig'

const DOMAIN = MenuConfig.domain

class MenuFullButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hideSlider: true
    }

    this.itemClicked = this.itemClicked.bind(this)
    this.removeConfirmSlider = this.removeConfirmSlider.bind(this)
    this.onSlide = this.onSlide.bind(this)
    this.orderDrink = this.orderDrink.bind(this)
    this.sendPay = this.sendPay.bind(this)
    this.addOrderToStore = this.addOrderToStore.bind(this)
  }

  sendPay (amount) {
    let payObj = {
      amount: amount*100,
      currency: 'usd',
      stripeID: this.props.customerStripe,
      barID: this.props.currBarStripe,
    }
    console.log(`payObj.amount is: ${payObj.amount}`)
    console.log(`payObj.currency is: ${payObj.currency}`)
    console.log(`payObj.stripeID is: ${payObj.stripeID}`)
    console.log(`payObj.barID is: ${payObj.barID}`)
    return fetch(`${DOMAIN}/customer/pay`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payObj)
    }).then(res => {
      return res.json()
    }).then(json => {
      console.log(json)
    }).catch(err => {
      console.log('err', err)
    })
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
    console.log(`tabs id is: ${this.props.tabId}`)
    fetch(`${DOMAIN}/orders/addorder/`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        drinkName: order.name,
        tabId: this.props.tabId
      })
    }).catch(err => {
      console.log('err', err)
    })
  }

  onSlide (order) {
    this.orderDrink(order)
    this.sendPay(order.price)
    this.addOrderToStore(order)
    this.removeConfirmSlider()
  }

  removeConfirmSlider () {
    this.setState({ hideSlider: true })
  }

  addOrderToStore (order) {
    this.props.addOrder(order)
  }

  render () {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={() => { this.itemClicked(this.props.item) }}>
        {this.state.hideSlider ? <Text style={styles.buttonText}> {this.props.text && this.props.text}</Text> : null}
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

const mapStateToProps = state => {
  return {
    paidOrders: state.customer.paidOrders,
    tabId: state.customer.tabId,
    customerStripe: state.customer.customerStripe,
    currBarStripe: state.bars.currBarStripe
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOrder: order => dispatch(CustomerActions.addOrder(order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuFullButton)
