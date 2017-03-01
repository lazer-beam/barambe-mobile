import React from 'react'
import { Alert, ScrollView, View, Image, Button, TextInput, Text } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Form from 'react-native-form'

import { Metrics, Images, Colors } from '../Themes'
import MenuConfig from '../Config/MenuConfig'

import styles from './Styles/MenuBarScreenStyle'

const DOMAIN = MenuConfig.domain

export default class CreditCardFormScreen extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      ccNumber: '',
      expMonth: '',
      expYear: '',
      cardCVC: ''
    }
    this.submitCard = this.submitCard.bind(this)
  }

  submitCard() {
    let alertMsg = '';
    if (this.state.ccNumber.length !== 16) {
      alertMsg = 'Please check your credit card number'
    } else if (this.state.expMonth.length !== 2) {
      alertMsg = 'Please check your expiration month'
    } else if (this.state.expYear.length !== 4) {
      alertMsg = 'Please check your expiration year'
    } else if (this.state.cardCVC.length !== 3) {
      alertMsg = 'Please check your card CVC'
    }

    if (alertMsg) {
      Alert.alert(
        'Incorrect Data Format',
        alertMsg,
        [{text: 'OK', onPress: () => console.log('OK Pressed')},]
      )
      return;
    }

    let splitCCNum = this.state.ccNumber.match(/.{1,4}/g).join(' ');
    var cardDetails = {
      "card[number]": splitCCNum,
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
    const props = {
      styles: {
        cntr: {
          flex: 1,
          marginTop: Metrics.BarMenuTopMargin,
          backgroundColor: Colors.barambeBlue,
        },
        innerCntr: {
          flex: 1,
          paddingTop: Math.floor(Metrics.screenHeight / 5)
        },
      }
    }
    return (
      <View style={props.styles.cntr}>
        <ScrollView style={props.styles.innerCntr} ref='container'>
        <Form ref="form">
          <TextInput type="TextInput" name="ccNumber" placeholder="Credit Card Number" placeholderTextColor="#F7CE3E" onChangeText={(text) => this.setState({ccNumber: text})} value={this.state.ccNumber} style={{backgroundColor:'#1A2930', color:'#F7CE3E'}} />               
          <TextInput type="TextInput" name="expMonth" placeholder="Exp. Month: XX" placeholderTextColor="#F7CE3E" onChangeText={(text) => this.setState({expMonth: text})} value={this.state.expMonth} style={{backgroundColor:'#1A2930', color:'#F7CE3E'}} />
          <TextInput type="TextInput" name="expYear" placeholder="Exp. Year: XXXX" placeholderTextColor="#F7CE3E" onChangeText={(text) => this.setState({expYear: text})} value={this.state.expYear} style={{backgroundColor:'#1A2930', color:'#F7CE3E'}} />
          <TextInput type="TextInput" name="cardCVC" placeholder="Card CVC: XXX" placeholderTextColor="#F7CE3E" onChangeText={(text) => this.setState({cardCVC: text})} value={this.state.cardCVC} style={{backgroundColor:'#1A2930', color:'#F7CE3E'}} />
        </Form>
        </ScrollView>
        <Button color={Colors.barambeBlack} title='Submit Card' onPress={() => { this.submitCard() }}></Button>
      </View>
    )
  }
}
