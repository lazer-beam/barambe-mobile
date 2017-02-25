import React, { Component } from 'react'
import styles from './Styles/CreditCardFormScreenStyle'
import { View, TextInput, Button } from 'react-native' 

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
      <View style={styles.mainContainer}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({ccNumber: text})}
          value={this.state.ccNumber}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({expMonth: text})}
          value={this.state.expMonth}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({expYear: text})}
          value={this.state.expYear}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
        />
        <Button
          onPress={onPressLearnMore}
          title="Add Card"
        />                   
      </View>
    )
  }
}