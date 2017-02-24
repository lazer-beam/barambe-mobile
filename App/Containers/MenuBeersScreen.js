// @flow

import React from 'react'
import { ScrollView, View, Image, TouchableOpacity, Text, Button } from 'react-native'
import { Metrics, Images } from '../Themes'
import MenuFullButton from '../Components/MenuFullButton'

// Styles
import styles from './Styles/MenuBarScreenStyle'

export default class APITestingScreen extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      beers: [],
      renderModal: false,
      beerClicked: null
    }

    this.beerClicked = this.beerClicked.bind(this)
  }

  beerClicked (beer) {
    this.setState({
      renderModal: true,
      beerClicked: beer
    })
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <Image source={Images.barMockHeader} style={styles.menuHeaderImage} resizeMode='stretch' />
        <ScrollView style={styles.menuContainer} ref='container' scrollEnabled={false}>
          {this.props.beers.map(beer => <MenuFullButton onClickedItem={this.beerClicked} item={beer} price={beer.price} text={beer.name} key={beer.name} styles={{marginTop: 0, marginBottom: 0, backgroundColor: '#1A2930'}} />)}
        </ScrollView>
        <Button title='Close Tab' onPress={() => { console.log('closing tab') }}>Close Tab</Button>
        {this.state.renderModal ? <OrderModal order={this.state.beerClicked} /> : <OrderModal />}
      </View>
    )
  }

}

class OrderModal extends React.Component {
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
