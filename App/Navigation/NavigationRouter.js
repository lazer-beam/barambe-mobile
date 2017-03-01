// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'

import Styles from './Styles/NavigationContainerStyle'
import BarLandingScreen from '../Components/BarLandingScreen'
import CreditCardFormScreen from '../Components/CreditCardFormScreen'
import NearbyBarsScreen from '../Components/NearbyBarsScreen'

import MenuBarScreen from '../Components/MenuBarScreen'
import MenuBeersScreen from '../Components/MenuBeersScreen'
import MenuShotsScreen from '../Components/MenuShotsScreen'
import MenuCocktailsScreen from '../Components/MenuCocktailsScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

export default class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
          <Scene initial key='nearbyBarsScreen' component={NearbyBarsScreen} title='BARAMBE' />

          <Scene key='barLandingScreen' component={BarLandingScreen} title='BARAMBE' />
          <Scene key='barMenu' component={MenuBarScreen} title='Menu' />
          <Scene key='beersMenu' component={MenuBeersScreen} title='Beers' />
          <Scene key='shotsMenu' component={MenuShotsScreen} title='Shots' />
          <Scene key='cocktailsMenu' component={MenuCocktailsScreen} title='Cocktails' />

          <Scene key='creditCardFormScreen' component={CreditCardFormScreen} title='Credit Card' />
        </Scene>
      </Router>
    )
  }
}