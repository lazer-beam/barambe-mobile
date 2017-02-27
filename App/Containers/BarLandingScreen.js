import React from 'react'
import { TextInput, Text, ScrollView, View, Image, Button } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import { Actions as NavigationActions } from 'react-native-router-flux'

import { Metrics, Images } from '../Themes'
import MenuFullButton from '../Components/MenuFullButton'
import MenuConfig from '../Config/MenuConfig'

// Styles
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
      customerStripe: this.state.customerStripe,
      barStripe: this.state.barStripe
    })
    // pass down stripes, table#
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <ScrollView style={styles.container} ref='container'>
          <Text style={styles.barHeader}>{this.state.barName}</Text>
          <Image source={{uri:'http://img04.deviantart.net/4281/i/2010/010/f/6/paddy__s_pub_by_detroitchicago.jpg'}} 
          style={styles.headerImage} 
          resizeMode='stretch' />
            <View style={styles.tableInfo}>
              <Text style={{color:'#C5C1C0', fontSize: 17}}>TABLE NUMBER (optional):</Text>
            </View>
            <TextInput type="TextInput" 
              name="tableNumber" 
              placeholder="Enter Table Number" 
              placeholderTextColor="#F7CE3E"
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
        </ScrollView>
        <Button title='Open Tab' onPress={() => { this.renderMenuBar() }}></Button>
      </View>
    )
  }
}
