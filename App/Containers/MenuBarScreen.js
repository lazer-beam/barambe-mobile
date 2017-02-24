// @flow

import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import { Actions as NavigationActions } from 'react-native-router-flux'

import { Metrics, Images } from '../Themes'
import MenuFullButton from '../Components/MenuFullButton'
import MenuConfig from '../Config/MenuConfig'

// Styles
import styles from './Styles/MenuBarScreenStyle'

const DOMAIN = MenuConfig.domain

export default class APITestingScreen extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      beers: [],
      shots: [],
      cocktails: [],
      addIns: []
    }

    this.renderBeerMenu = this.renderBeerMenu.bind(this)
    this.renderShotsMenu = this.renderShotsMenu.bind(this)
    this.renderCocktailsMenu = this.renderCocktailsMenu.bind(this)
    this.convertPrices = this.convertPrices.bind(this)
  }

  componentDidMount () {
    RNFetchBlob.fetch('GET', `${DOMAIN}/drinks/getall/`)
      .then(res => {
        this.generateDrinksArrs(res.json())
      }).catch(err => {
        console.log('err', err)
      })
  }

  generateDrinksArrs (json) {
    this.setState({
      beers: this.convertPrices(json.beerArr),
      shots: this.convertPrices(json.liquorArr),
      cocktails: this.convertPrices(json.cocktailArr),
      addIns: this.convertPrices(json.addInArr)
    })
  }

  convertPrices (items) {
    return items.map(item => {
      item.price = item.price ? (item.price / 100).toFixed(2) : null
      return item
    })
  }

  renderBeerMenu () {
    NavigationActions.beersMenu({ beers: this.state.beers })
  }

  renderShotsMenu () {
    NavigationActions.shotsMenu({ shots: this.state.shots })
  }

  renderCocktailsMenu () {
    NavigationActions.cocktailsMenu({
      cocktails: this.state.cocktails,
      liquors: this.state.shots,
      addIns: this.state.addIns
    })
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <ScrollView style={styles.container} ref='container'>
          <Image source={Images.barMockHeader} style={styles.menuHeaderImage} resizeMode='stretch' />
          <MenuFullButton text={'Beer Menu'} onPress={() => { this.renderBeerMenu() }} styles={{marginBottom: 0, backgroundColor: '#1A2930'}} key={1} />
          <MenuFullButton text={'Shots Menu'} onPress={() => { this.renderShotsMenu() }} styles={{marginBottom: 0, marginTop: 0, backgroundColor: '#1A2930'}} key={2} />
          <MenuFullButton text={'Cocktails Menu'} onPress={() => { this.renderCocktailsMenu() }} styles={{marginTop: 0, backgroundColor: '#1A2930'}} key={3} />
        </ScrollView>
      </View>
    )
  }
}
