import React from 'react'
import { TouchableOpacity, ScrollView, Text, Button } from 'react-native'
import MenuConfig from '../Config/MenuConfig'

const DOMAIN = MenuConfig.domain
const TEMP_TAB_ID = '2'

export default class OrderModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      order: null,
      displayModal: true
    }
    this.renderModal = this.renderModal.bind(this)
    this.removeModal = this.removeModal.bind(this)
  }

  removeModal () {
    this.setState({
      displayModal: false
    })
  }

  componentDidUpdate (prevProps, prevState) {
    if (!prevState.displayModal) {
      this.setState({ displayModal: true })
    }
  }

  sendOrderToServer (order) {
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

  renderModal () {
    return (<ScrollView style={{ top: 250, bottom: 0, left: 0, right: 0, position: 'absolute' }} overflow='hidden'>
      <TouchableOpacity
        onPress={this.removeModal}
        style={{backgroundColor: 'white', padding: 20}}
      >
        <Text>{JSON.stringify(this.props.order)}</Text>
        <Text allowFontScaling={false} style={{fontFamily: 'CourierNewPS-BoldMT', fontSize: 10}}>
          {this.state.message}
        </Text>
        <Button title='Add to Tab' onPress={() => { this.sendOrderToServer(this.props.order) }} />
      </TouchableOpacity>
    </ScrollView>)
  }

  render () {
    if (this.props.order && this.state.displayModal) {
      return this.renderModal(this.props.order)
    }

    return <Text />
  }
}
