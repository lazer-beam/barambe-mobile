// @flow

import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import CustomerActions from '../Redux/CustomerRedux'
import { Metrics, Images, Colors } from '../Themes'
import MenuFullButton from './MenuFullButton'
import ViewTabBtn from './MenuViewTabBtn'
import MenuViewTabScreen from './MenuViewTabScreen'
import MenuConfig from '../Config/MenuConfig'

// Styles
import styles from './Styles/MenuBarScreenStyle'

const DOMAIN = MenuConfig.domain

class MenuBarScreen extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      customerStripe: this.props.customerStripe,
      barStripe: this.props.barStripe,
      visibleHeight: Metrics.screenHeight,
      beers: [],
      shots: [],
      cocktails: [],
      addIns: []
    }

    this.renderBeerMenu = this.renderBeerMenu.bind(this)
    this.renderShotsMenu = this.renderShotsMenu.bind(this)
    this.renderCocktailsMenu = this.renderCocktailsMenu.bind(this)
    this.renderTabHistory = this.renderTabHistory.bind(this)
    this.sendPay = this.sendPay.bind(this)
  }

  sendPay (amount) {
    let payObj = {
      amount: amount*100,
      currency: 'usd',
      stripeID: this.state.customerStripe,
      barID: this.state.barStripe
    }
    console.log(`payObj.amount is: ${payObj.amount}`)
    console.log(`payObj.currency is: ${payObj.currency}`)
    console.log(`payObj.stripeID is: ${payObj.stripeID}`)
    console.log(`payObj.barID is: ${payObj.barID}`)
    return fetch(`${DOMAIN}/customer/pay`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payObj)
    }).then(res => {
      return res.json()
    }).then(json => {
      console.log(json)
    }).catch(err => {
      console.log('err', err)
    })
  }

  renderBeerMenu () {
    NavigationActions.beersMenu({ buyDrink: this.sendPay, table: this.props.table })
  }

  renderShotsMenu () {
    NavigationActions.shotsMenu({ buyDrink: this.sendPay, table: this.props.table })
  }

  renderCocktailsMenu () {
    NavigationActions.cocktailsMenu({
      buyDrink: this.sendPay,
      table: this.props.table
    })
  }

  renderTabHistory () {
    this.props.renderTabView(true)
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <ScrollView style={styles.container} ref='container'>
          <Image source={Images.barMockHeader} style={styles.menuHeaderImage} resizeMode='stretch' />
          {this.props.displayTab
          ? <MenuViewTabScreen />
          : <View>
            <MenuFullButton text={'Beer Menu'}
              onClickedItem={() => { this.renderBeerMenu() }}
              styles={{marginBottom: 0, backgroundColor: Colors.barambeBlack}}
              key={1}
            />
            <MenuFullButton text={'Shots Menu'}
              onClickedItem={() => { this.renderShotsMenu() }}
              styles={{marginBottom: 0, marginTop: 0, backgroundColor: Colors.barambeBlack}}
              key={2}
            />
            <MenuFullButton text={'Cocktails Menu'}
              onClickedItem={() => { this.renderCocktailsMenu() }}
              styles={{marginTop: 0, backgroundColor: Colors.barambeBlack}}
              key={3}
            />
          </View>}

        </ScrollView>
        <ViewTabBtn renderTabHistory={this.renderTabHistory} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    displayTab: state.customer.displayTab
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderTabView: display => dispatch(CustomerActions.renderTabView(display))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBarScreen)
