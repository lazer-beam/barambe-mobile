// @flow

import React from 'react'
import { ScrollView, View, Image, Text } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Entypo from 'react-native-vector-icons/Entypo'

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
      currentLongitude: '-118.390891',
      currentLatitude: '33.976002'
    }
    this.renderBarLanding = this.renderBarLanding.bind(this)
    this.calcDistance = this.calcDistance.bind(this)
  }

  renderBarLanding(barObj) {
    NavigationActions.barLandingScreen({
      barStripe: barObj.stripe,
      name: barObj.name,
      picture: barObj.picture,
      authId: barObj.authId
    })
  }

  calcDistance(barPos) {
    let barLat = barPos[0]
    let barLong = barPos[1]

    var radlat1 = Math.PI * this.state.currentLatitude/180
    var radlat2 = Math.PI * barLat/180
    var theta = this.state.currentLongitude-barLong
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    return dist.toFixed(2)
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
      <View style={styles.nearbyBarsContainer}>
        <Text style={styles.barHeader}>NEARBY BARS</Text>
        <Entypo name="drink" style={{textAlign: 'center'}} size={40} color="#C5C1C0" />
        <ScrollView style={styles.container} ref='container'>
          {this.state.bars.map(barObj => {
            return <View style={styles.listedBar}>
              <Text style={{color: '#F7CE3E', fontSize: 20}} 
                onPress={() => this.renderBarLanding(barObj)}>
                {barObj.name}
              </Text>
              <Text style={{color: '#F7CE3E'}}>
                {this.calcDistance(barObj.location)} mi
              </Text>
            </View>
          })}
        </ScrollView>
      </View>
    )
  }
}
