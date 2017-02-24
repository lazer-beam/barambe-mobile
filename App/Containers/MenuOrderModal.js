import React from 'react'
import { TouchableOpacity, ScrollView, Text } from 'react-native'

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

  renderModal () {
    return (<ScrollView style={{ top: 0, bottom: 0, left: 0, right: 0, position: 'absolute' }} overflow='hidden'>
      <TouchableOpacity
        onPress={this.removeModal}
        style={{backgroundColor: 'white', padding: 20}}
      >
        <Text>{JSON.stringify(this.props.order)}</Text>
        <Text allowFontScaling={false} style={{fontFamily: 'CourierNewPS-BoldMT', fontSize: 10}}>
          {this.state.message}
        </Text>
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
