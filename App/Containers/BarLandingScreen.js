/*import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, TextInput, View } from 'react-native'
import FullButton from '../Components/FullButton'
import styles from './Styles/BarLandingScreenStyle'
import headerStyle from './Styles/MenuHeaderStyle'
import { Images } from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux';

// import styles from 'SOMEWHERE'

export default class BarScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tableNum: 'Input Table Number'
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
          <Image style={{
            position: 'absolute',
            top: 150,
            left: 0,
            bottom: 0,
            right: 0}}
            source={{uri:'http://img04.deviantart.net/4281/i/2010/010/f/6/paddy__s_pub_by_detroitchicago.jpg'}}
            resizeMode='stretch'/>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Paddy's Pub
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Payment
            </Text>
            <Text>
              {/*Normally insert this.props.cardNickname, this.props.Last4Digits*/
              /*Andrew Credit 7259
            </Text>
            <Text onPress={NavigationActions.creditCardScreen}>
              Change
            </Text>
          </View>          
        </ScrollView>
        <FullButton text='OPEN TAB' />
      </View>
    )
  }
}*/

// @flow

import React from 'react'
import { ScrollView, View, Image, Button } from 'react-native'
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
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <ScrollView style={styles.container} ref='container'>
          <Image source={{uri:'http://img04.deviantart.net/4281/i/2010/010/f/6/paddy__s_pub_by_detroitchicago.jpg'}} style={styles.menuHeaderImage} resizeMode='stretch' />
        </ScrollView>
        <Button title='Open Tab' onPress={() => { console.log('closing tab') }}></Button>
      </View>
    )
  }
}
