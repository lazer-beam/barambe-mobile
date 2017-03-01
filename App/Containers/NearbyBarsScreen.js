// @flow

import React from 'react'
import { ScrollView, View, Image, Text } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Entypo from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux'

import BarsActions from '../Redux/BarsRedux'
import { Metrics, Images, Colors } from '../Themes'
import MenuFullButton from '../Components/MenuFullButton'
import MenuConfig from '../Config/MenuConfig'

// Styles
import styles from './Styles/NearbyBarsScreenStyle'

const DOMAIN = MenuConfig.domain

class NearbyBarScreen extends React.Component {
  constructor (props: Object) {
    super(props)
    
    this.renderBarLanding = this.renderBarLanding.bind(this)
    this.calcDistance = this.calcDistance.bind(this)
  }

  componentDidMount() {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     let currentLocation = position;
    //     console.log(`Current location: ${JSON.stringify(currentLocation)}`)
    //     this.setState({
    //       currentLongitude: currentLocation.coords.longitude,
    //       currentLatitude: currentLocation.coords.latitude
    //     });
    //   },
    //   (error) => alert(JSON.stringify(error)),
    //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    //   // asynchronously get current position, send request to retrieve nearby bars, which populates this.state.bars
    // );
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

    var radlat1 = Math.PI * this.props.currentLatitude/180
    var radlat2 = Math.PI * barLat/180
    var theta = this.props.currentLongitude-barLong
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515

    return dist.toFixed(2)
  }

  render () {
    return (
      <View style={styles.nearbyBarsContainer}>
        <Text style={styles.barHeader}>NEARBY BARS</Text>
        <Entypo name="drink" style={{textAlign: 'center'}} size={40} color="#C5C1C0" />
        <ScrollView style={styles.container} ref='container'>
          {this.props.bars.map((barObj, idx) => {
            return <View key={idx} style={styles.listedBar}>
              <Text
                style={{color: Colors.barambeYellow, fontSize: 20}}
                onPress={() => this.renderBarLanding(barObj)}
              >
                {barObj.name}
              </Text>
              <Text style={{color: Colors.barambeYellow}}>
                {this.calcDistance(barObj.location)} mi
              </Text>
            </View>
          })}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    bars: state.bars.bars,
    currentLongitude: state.customer.currentLongitude,
    currentLatitude: state.customer.currentLatitude
  }
}

export default connect(mapStateToProps)(NearbyBarScreen)