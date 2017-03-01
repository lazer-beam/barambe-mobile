// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'

import Styles from './Styles/NavigationContainerStyle'
import BarLandingScreen from '../Containers/BarLandingScreen'
import CreditCardFormScreen from '../Containers/CreditCardFormScreen'
import NearbyBarsScreen from '../Containers/NearbyBarsScreen'

import MenuBarScreen from '../Containers/MenuBarScreen'
import MenuBeersScreen from '../Containers/MenuBeersScreen'
import MenuShotsScreen from '../Containers/MenuShotsScreen'
import MenuCocktailsScreen from '../Containers/MenuCocktailsScreen'

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