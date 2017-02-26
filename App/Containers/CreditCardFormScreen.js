/*import React, { Component } from 'react'
import styles from './Styles/CreditCardFormScreenStyle'
import { View, TextInput, Button, Switch, Slider, Picker } from 'react-native' 
import Form from 'react-native-form'

export default class CreditCardFormScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ccNumber: 'Credit Card Number',
      expMonth: 'Exp. Month',
      expYear: 'Exp. Year',
      cardCVC: 'CVC'
    };
  }

  createToken(cardNum, expMonth, expYear, CVC) {
    let cardObj = {
      "card[number]": cardNum,
      "card[exp_month]": expMonth,
      "card[exp_year]": expYear,
      "card[cvc]": CVC
    }

    let formBody = [];
    for (let param in cardObj) {
      var key = encodeURIComponent(param);
      var val = encodeURIComponent(cardDetails[param]);
      formBody.push(key + '=' + val);
    }
    formBody = formBody.join('&')
    return fetch(stripe_url + 'tokens', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + secret_key
      },
      body: formBody
    });
  }



  render () {
    return (
      <Form ref="form">
        
            <TextInput type="TextInput" name="myTextInput" />
        
        
        
      </Form>
    )
  }
}*/

// @flow

import React from 'react'
import { ScrollView, View, Image, Button, TextInput, Text } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Form from 'react-native-form'

import { Metrics, Images } from '../Themes'
import MenuFullButton from '../Components/MenuFullButton'
import MenuConfig from '../Config/MenuConfig'

// Styles
import styles from './Styles/MenuBarScreenStyle'

const DOMAIN = MenuConfig.domain

export default class CreditCardFormScreen extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      ccNumber: 'Card Number: XXXX XXXX XXXX XXXX',
      expMonth: 'Exp. Month: "XX"',
      expYear: 'Exp. Year: "XXXX"',
      cardCVC: 'CVC: XXX'
    }
    this.submitCard = this.submitCard.bind(this)
  }

  submitCard() {
    var cardDetails = {
      "card[number]": this.state.ccNumber,
      "card[exp_month]": this.state.expMonth,
      "card[exp_year]": this.state.expYear,
      "card[cvc]": this.state.cardCVC
    }

    var formBody = [];
    for (var property in cardDetails) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(cardDetails[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return fetch('https://api.stripe.com/v1/' + 'tokens', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + 'pk_test_wzRymKaVglngAKFqA7AkEdQf'
      },
      body: formBody
    }).then(respObj => {
      let token = respObj;
      return respObj.json()
    }).then(json => {
      console.log('token obj: ', json);
      console.log('token id: ', json.id);
      console.log(`card info: ${json.card.brand}, ${json.card.last4}`);
      return customerInfo = {
        token: json.id,
        cardBrand: json.card.brand,
        last4: json.card.last4,
        authId: 'testAuthId'
      }
    }).then(cusInfo => {
      console.log(`${DOMAIN}/customer/saveInfo`)
      return fetch(`${DOMAIN}/customer/saveInfo`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cusInfo)
      })
    }).catch(err => {console.log(err)});

    console.log(formBody)
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <ScrollView style={styles.container} ref='container'>
        <Form ref="form">
          <TextInput type="TextInput" name="ccNumber" onChangeText={(text) => this.setState({ccNumber: text})} value={this.state.ccNumber} style={{backgroundColor:'#1A2930', color:'#F7CE3E'}} />               
          <TextInput type="TextInput" name="expMonth" onChangeText={(text) => this.setState({expMonth: text})} value={this.state.expMonth} style={{backgroundColor:'#1A2930', color:'#F7CE3E'}} />
          <TextInput type="TextInput" name="expYear" onChangeText={(text) => this.setState({expYear: text})} value={this.state.expYear} style={{backgroundColor:'#1A2930', color:'#F7CE3E'}} />
          <TextInput type="TextInput" name="cardCVC" onChangeText={(text) => this.setState({cardCVC: text})} value={this.state.cardCVC} style={{backgroundColor:'#1A2930', color:'#F7CE3E'}} />
        </Form>
        </ScrollView>
        <Button title='Submit Card' onPress={() => { this.submitCard() }}>Close Tab</Button>
      </View>
    )
  }
}

          // <MenuFullButton text={'Beer Menu'} onClickedItem={() => { this.renderBeerMenu() }} styles={{marginBottom: 0, backgroundColor: '#1A2930'}} key={1} />
          // <MenuFullButton text={'Shots Menu'} onClickedItem={() => { this.renderShotsMenu() }} styles={{marginBottom: 0, marginTop: 0, backgroundColor: '#1A2930'}} key={2} />
          // <MenuFullButton text={'Cocktails Menu'} onClickedItem={() => { this.renderCocktailsMenu() }} styles={{marginTop: 0, backgroundColor: '#1A2930'}} key={3} />