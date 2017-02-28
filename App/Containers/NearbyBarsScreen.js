// @flow

import React from 'react'
import { ScrollView, View, Image, Text } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import { Actions as NavigationActions } from 'react-native-router-flux'

import { Metrics, Images, Colors } from '../Themes'
import MenuFullButton from '../Components/MenuFullButton'
import MenuConfig from '../Config/MenuConfig'

// Styles
import styles from './Styles/NearbyBarsScreenStyle'

const DOMAIN = MenuConfig.domain

export default class NearbyBarScreen extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      bars: [{
        subdomain: 'http://barambe.paddyspub.com/',
        stripe: 'acct_19nbJhDCKIISg37F',
        picture: 'http://img04.deviantart.net/4281/i/2010/010/f/6/paddy__s_pub_by_detroitchicago.jpg',
        location: ['33.978035', '-118.391949'],//lat longitude
        authId: 'paddyspub',
        name: "Paddy's Pub"
      },{
        subdomain: 'http://barambe.accomplicebar.com/',
        stripe: 'acct_19nbJhDCKIISg37F',
        picture: 'https://cdn0.vox-cdn.com/uploads/chorus_image/image/51853251/2016-07-11-statuskuo-003.0.0.jpeg',
        location: ['34.004392', '-118.431099'],
        authId: 'accomplice',
        name: 'Accomplice Bar'
      },{
        subdomain: 'http://barambe.leialoha.com/',
        stripe: 'acct_19nbJhDCKIISg37F',
        picture: 'https://assets3.thrillist.com/v1/image/1407261/size/tmg-article_default_mobile.jpg',
        location: ['33.959840', '-118.379463'],
        authId: 'leialoha',
        name: 'Lei Aloha'
      }],
      currentLongitude: '-122.084',
      currentLatitude: '37.422'
    }
    this.renderBarLanding = this.renderBarLanding.bind(this)
  }

  renderBarLanding(barObj) {
    NavigationActions.barLandingScreen({
      barStripe: barObj.stripe,
      name: barObj.name,
      picture: barObj.picture,
      authId: barObj.authId
    })
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     let currentLocation = JSON.stringify(position);
    //     console.log(`Current location: ${currentLocation}`)
    //     this.setState({
    //       currentLongitude: currentLocation.coords.longitude,
    //       currentLatitude: currentLocation.coords.latitude
    //     });
    //   },
    //   (error) => alert(JSON.stringify(error)),
    //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      // asynchronously get current position, send request to retrieve nearby bars, which populates this.state.bars
    // );
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <Text style={styles.barHeader}>NEARBY BARS</Text>
        <ScrollView style={styles.container} ref='container'>
          {this.state.bars.map(barObj => {
            return <View style={styles.listedBar}>
              <Text style={{color: '#F7CE3E', fontSize: 20}} 
                onPress={() => this.renderBarLanding(barObj)}>
                {barObj.name}
              </Text>
            </View>
          })}
        </ScrollView>
      </View>
    )
  }
}
