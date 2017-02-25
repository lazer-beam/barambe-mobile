import React from 'react'
import { Button } from 'react-native'
import { Colors } from '../Themes'

export default class ViewTabBtn extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      displayModal: false
    }
  }

  render () {
    return (
      <Button color={Colors.barambeBlue} title='Close Tab' onPress={() => { console.log('closing tab from helper component') }} />
    )
  }
}

/* <ScrollView style={{ top: 250, bottom: 0, left: 0, right: 0, position: 'absolute' }} overflow='hidden'>
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
</ScrollView> */
