// @flow

import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import { Metrics, Images } from '../Themes'
import FullButton from '../Components/FullButton'

// For API
import API from '../Services/Api'
import MenuConfig from '../Config/MenuConfig'

// Styles
import styles from './Styles/BarMenuScreenStyle'

const DOMAIN = MenuConfig.domain

export default class APITestingScreen extends React.Component {
  api: Object

  state: {
    visibleHeight: number
  }

  constructor (props: Object) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      beers: []
    }

    this.api = API.create()
  }

  componentDidMount () {
    RNFetchBlob.fetch('GET', `${DOMAIN}/drinks/getall/`)
      .then(res => {
        this.createBeerArr(res.json().beerArr)
      }).catch(err => {
        console.log('err', err)
      })
  }

  createBeerArr (beers) {
    this.setState({
      beers: this.convertPrices(beers)
    })
    console.log('this.state', this.state)
  }

  convertPrices (beers) {
    return beers.map(beer => ({
      name: beer.name,
      price: (beer.price / 100).toFixed(2)
    }))
  }

  addBeerToTab () {

  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <ScrollView style={styles.container} ref='container'>
          <Image source={Images.barMockHeader} style={styles.menuHeaderImage} resizeMode='stretch' />
          {this.state.beers.map(beer => <FullButton text={beer.name} key={beer.name} styles={{marginTop: 0, marginBottom: 0, backgroundColor: '#1A2930'}} />)}
        </ScrollView>
      </View>
    )
  }
}
