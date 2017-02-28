import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Colors, Metrics } from '../Themes'
import styles from './Styles/MenuFullButtonStyle'
import CustomerActions from '../Redux/CustomerRedux'

class ViewTabScreen extends React.Component {
  constructor (props) {
    super(props)

    this.removeTabView = this.removeTabView.bind(this)
  }

  removeTabView () {
    this.props.renderTabView(false)
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
        {this.props.paidOrders.map((paidOrder, idx) => (
          <TouchableOpacity key={idx} style={[styles.button, props.styles.touchable]} onPress={() => { this.itemClicked(this.props.item) }}>
            <Text style={styles.buttonText}> {paidOrder.name} </Text>
            <Text style={styles.priceText}> {paidOrder.price} </Text>
          </TouchableOpacity>))}
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
