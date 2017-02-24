// @flow

import React from 'react'
import { ScrollView, View, Image, Button } from 'react-native'
import { Metrics, Images } from '../Themes'
import MenuFullButton from '../Components/MenuFullButton'
import OrderModal from './MenuOrderModal'

// Styles
import styles from './Styles/MenuBarScreenStyle'

export default class MenuCocktail extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      renderModal: false,
      cocktailClicked: null
    }
    this.displayCocktailModal = this.displayCocktailModal.bind(this)
  }

  displayCocktailModal (shot) {
    this.setState({
      renderModal: true,
      cocktailClicked: shot
    })
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <Image source={Images.barMockHeader} style={styles.menuHeaderImage} resizeMode='stretch' />
        <ScrollView style={styles.container} ref='container'>
          {this.props.cocktails.map(cocktail => <MenuFullButton onClickedItem={this.displayCocktailModal} item={cocktail} price={cocktail.price} text={cocktail.name} key={cocktail.name} styles={{marginTop: 0, marginBottom: 0, backgroundColor: '#1A2930'}} />)}
        </ScrollView>
        {this.state.renderModal ? <OrderModal order={this.state.cocktailClicked} /> : <OrderModal />}
        <Button title='Close Tab' onPress={() => { console.log('closing tab') }} />
      </View>
    )
  }
}
