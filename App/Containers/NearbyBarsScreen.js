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

    this.state = {
      bars: []
    }
    
    this.renderBarLanding = this.renderBarLanding.bind(this)
    this.calcDistance = this.calcDistance.bind(this)
    this.filterBarsByDistance = this.filterBarsByDistance.bind(this)
  }

  componentDidMount() {
    this.setState({
      bars: this.filterBarsByDistance(this.props.bars)
    })
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

  filterBarsByDistance (bars) {
    return [].concat(bars).sort((barA, barB) => this.calcDistance(barA.location) > this.calcDistance(barB.location))
  }

  render () {
    const props = {
      style: {
        textInImage: {
          position: 'absolute',
          marginLeft: Metrics.screenWidth / 6,
          flex: 1,
          height: 30,
          width: Metrics.screenWidth / 1.5,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 100
        }
      }
    }
    return (
      <View style={styles.nearbyBarsContainer}>
        <Text style={styles.barHeader}>NEARBY BARS</Text>
        <Entypo name="drink" style={{textAlign: 'center'}} size={40} color="#C5C1C0" />
        <ScrollView style={styles.container} ref='container'>
          {this.state.bars.map((barObj, idx) => {
            return <View key={idx} style={{ borderColor: Colors.barambeGrey,  borderTopWidth: 2, borderBottomWidth: 2, paddingTop: -10}}>
                    <Image style={styles.headerImage} source={{uri: barObj.picture}} resizeMode='stretch'>
                      <View style={props.style.textInImage}>
                        <Text style={{textShadowOffset: {width: 2, height: 2}, textShadowColor: 'black', color: Colors.barambeYellow, paddingRight: 30 }}> {barObj.name} </Text>
                        <Entypo name="dot-single" style={{textAlign: 'center', paddingRight: 30 }} size={Metrics.icons.tiny} color={Colors.barambeYellow} />
                        <Text style={{ textShadowOffset: {width: 2, height: 2}, textShadowColor: 'black', color: Colors.barambeYellow, fontWeight: '600'}}> Miles Away: {this.calcDistance(barObj.location)} </Text>
                      </View>
                    </Image>
                  </View>
            {/*return <View key={idx} style={styles.listedBar}>
              <Text
                style={{color: Colors.barambeYellow, fontSize: 20}}
                onPress={() => this.renderBarLanding(barObj)}
              >
                {barObj.name}
              </Text>
              <Text style={{color: Colors.barambeYellow}}>
                {this.calcDistance(barObj.location)}
              </Text>
            </View>*/}
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