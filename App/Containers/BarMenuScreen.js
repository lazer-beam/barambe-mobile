// @flow

import React from 'react'
import { ScrollView, View, Image } from 'react-native'
// import RNFetchBlob from 'react-native-fetch-blob'
import { Actions as NavigationActions } from 'react-native-router-flux'

import { Metrics, Images } from '../Themes'
import FullButton from '../Components/FullButton'

// For API
import API from '../Services/Api'
// import MenuConfig from '../Config/MenuConfig'

// Styles
import styles from './Styles/BarMenuScreenStyle'

// const DOMAIN = MenuConfig.domain

export default class APITestingScreen extends React.Component {
  api: Object

  state: {
    visibleHeight: number
  }

  constructor (props: Object) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight
    }

    this.api = API.create()
  }

  componentDidMount () {
    // RNFetchBlob.fetch('GET', `${DOMAIN}/drinks/getall/`)
    //   .then(res => {
    //     console.log('res.json()', res.json())
    //   }).catch(err => {
    //     console.log('err', err)
    //   })
  }

  renderBeerMenu () {
    NavigationActions.beersMenu()
  }

  renderShotsMenu () {
    NavigationActions.shotsMenu()
  }

  renderCocktailsMenu () {
    NavigationActions.cocktailsMenu()
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <ScrollView style={styles.container} ref='container'>
          <Image source={Images.barMockHeader} style={styles.menuHeaderImage} resizeMode='stretch' />
          <FullButton text={'Beer Menu'} onPress={NavigationActions.beersMenu} styles={{marginBottom: 0, backgroundColor: '#1A2930'}} key={1} />
          <FullButton text={'Shots Menu'} onPress={this.renderShotsMenu.bind(this, this.renderShotsMenu)} styles={{marginBottom: 0, marginTop: 0, backgroundColor: '#1A2930'}} key={2} />
          <FullButton text={'Cocktails Menu'} onPress={this.renderCocktailsMenu.bind(this, this.renderCocktailsMenu)} styles={{marginTop: 0, backgroundColor: '#1A2930'}} key={3} />
        </ScrollView>
      </View>
    )
  }
}
