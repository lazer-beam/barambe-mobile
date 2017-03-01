import React from 'react'
import { Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Colors, Metrics } from '../Themes'
import styles from './Styles/MenuFullButtonStyle'
import CustomerActions from '../Redux/CustomerRedux'

class ViewTabScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tip: '0.00',
      subtotal: '0.00',
      total: '0.00'
    }

    this.removeTabView = this.removeTabView.bind(this)
    this.changeTip = this.changeTip.bind(this)
    this.totalSum = this.totalSum.bind(this)
  }

  componentDidMount() {
    const subtotal = this.totalSum(this.props.paidOrders)
    this.setState({
      subtotal: (subtotal).toFixed(2),
      total: (parseFloat(subtotal) + parseFloat(this.state.tip)).toFixed(2)
    })
  }

  totalSum(orders) {
    return orders.reduce((sum, curr) => sum + parseFloat(curr.price), 0)
  }

  removeTabView () {
    this.props.renderTabView(false)
  }

  changeTip (inputTip) {
    if (isNaN(parseFloat(inputTip))) {
      return
    }

    inputTip = inputTip === '' ? '0' : inputTip
    this.setState({
      tip: inputTip,
      total: (parseFloat(this.state.subtotal) + parseFloat(inputTip)).toFixed(2)
    })
  }

  render () {
    const props = {
      styles: {
        touchable: {marginTop: 0, marginBottom: 0, backgroundColor: Colors.barambeBlack},
        icon: {marginBottom: 10, marginTop: 10}
      }
    }

    return (
      <View>
        <Icon
          style={props.styles.icon}
          name='arrow-back'
          size={Metrics.icons.small}
          color={Colors.barambeGrey}
          onPress={this.removeTabView}
        />
        <TextInput type="TextInput"
          name="tipNum"
          keyboardType={'numeric'}
          placeholder="Enter Tip"
          placeholderTextColor={Colors.barambeYellow}
          underlineColorAndroid={Colors.barambeGrey}
          onChangeText={text => this.changeTip(text)}
          style={{ color:Colors.barambeYellow }}
        />
        <Text style={{marginLeft: 5, marginTop: 10, color: Colors.barambeYellow}} >Subtotal: ${this.state.subtotal}</Text>
        <Text style={{marginLeft: 5, marginVertical: 10, color: Colors.barambeYellow}} >Total: ${this.state.total}</Text>
        <ScrollView style={{height: 200, width: Metrics.screenWidth}}>
        {this.props.paidOrders.map((paidOrder, idx) => (
          <TouchableOpacity key={idx} style={[styles.button, props.styles.touchable]} onPress={() => { this.itemClicked(this.props.item) }}>
            <Text style={styles.buttonText}> {paidOrder.name} </Text>
            <Text style={styles.priceText}> {paidOrder.price} </Text>
          </TouchableOpacity>))}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    paidOrders: state.customer.paidOrders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderTabView: display => dispatch(CustomerActions.renderTabView(display))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTabScreen)
