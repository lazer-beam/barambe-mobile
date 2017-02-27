<<<<<<< 23b70197aacda088e9f7540a9b74b1d2bc8bc537
import React from 'react'
import { TextInput, Text, ScrollView, View, Image, Button } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import { Actions as NavigationActions } from 'react-native-router-flux'

import { Metrics, Images } from '../Themes'
import MenuFullButton from '../Components/MenuFullButton'
import MenuConfig from '../Config/MenuConfig'

// Styles
=======
/*import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, TextInput, View } from 'react-native'
import FullButton from '../Components/FullButton'
>>>>>>> [fix]Show alert on cardForm on faulty data format
import styles from './Styles/BarLandingScreenStyle'

const DOMAIN = MenuConfig.domain

export default class APITestingScreen extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      table: '',
      // the below should be props
      cardBrand: 'Visa',
      cardLast4: '4242',
      customerStripe: 'cus_AB1NVGME7exD4z',
      barStripe: 'acct_19nbJhDCKIISg37F',
      barName: "Paddy's Pub"
    }
    this.renderCardForm = this.renderCardForm.bind(this);
    this.renderMenuBar = this.renderMenuBar.bind(this);
    this.changeTable = this.changeTable.bind(this);
  }

  // add a component mount that retrieves card info, need for changing cards -- should re-render with new card info
  componentDidMount() {

  }

  changeTable (tableNum) {
    this.setState({table: tableNum})
  }

  renderTableScreen () {
    NavigationActions.tableScreen({
      changeTable: this.changeTable
    })
  }

  renderCardForm () {
    NavigationActions.creditCardFormScreen()
  }

  renderMenuBar() {
    NavigationActions.barMenu({
      table: this.state.table,
      customerStripe: this.state.customerStripe,
      barStripe: this.props.barStripe
    })
    // pass down stripes, table#
  }

  render () {
    return (
<<<<<<< 23b70197aacda088e9f7540a9b74b1d2bc8bc537
      <View style={styles.barLandingContainer}>
        <ScrollView style={styles.container} ref='container'>
          <Text style={styles.barHeader}>{this.props.name}</Text>
          <Image source={{uri: this.props.picture}} 
          style={styles.headerImage} 
          resizeMode='stretch' />
            <View style={styles.tableInfo}>
              <Text style={{color:'#C5C1C0', fontSize: 17}}>TABLE NUMBER (optional):</Text>
            </View>
            <TextInput type="TextInput" 
              name="tableNumber" 
              placeholder="Enter Table Number" 
              placeholderTextColor="#F7CE3E"
              underlineColorAndroid="#C5C1C0"
              onChangeText={(text) => this.setState({table: text})}
              value={this.state.table}
              style={{ color:'#F7CE3E' }} />
          <View style={styles.currentCard}>
            <Text style={{color:'#C5C1C0', fontSize: 17}}>ACTIVE CARD:</Text>
            <Text style={{color:'#C5C1C0', fontSize: 15}}>{this.state.cardBrand} {this.state.cardLast4}</Text>
          </View>
          <Text style={{color:'#F7CE3E', fontSize: 14, marginLeft: 5}} 
            onPress={() => { this.renderCardForm() }}>
            Change Card
          </Text>
=======
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
>>>>>>> [fix]Show alert on cardForm on faulty data format
        </ScrollView>
        <Button color='#F7CE3E' title='Open Tab' onPress={() => { this.renderMenuBar() }}></Button>
      </View>
    )
  }
<<<<<<< 23b70197aacda088e9f7540a9b74b1d2bc8bc537
=======
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
>>>>>>> [fix]Show alert on cardForm on faulty data format
}
