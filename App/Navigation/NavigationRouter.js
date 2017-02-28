// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSectionsExample from '../Containers/ListviewSectionsExample'
import ListviewSearchingExample from '../Containers/ListviewSearchingExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'
import BarLandingScreen from '../Containers/BarLandingScreen'
import CreditCardScreen from '../Containers/CreditCardScreen'
import CreditCardFormScreen from '../Containers/CreditCardFormScreen'
import NearbyBarsScreen from '../Containers/NearbyBarsScreen'
import GeolocationTestScreen from '../Containers/GeolocationTestScreen.js'

import MenuBarScreen from '../Containers/MenuBarScreen'
import MenuBeersScreen from '../Containers/MenuBeersScreen'
import MenuShotsScreen from '../Containers/MenuShotsScreen'
import MenuCocktailsScreen from '../Containers/MenuCocktailsScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='nearbyBarsScreen' component={NearbyBarsScreen} title='BARAMBE' />

            <Scene key='barMenu' component={MenuBarScreen} title='Menu' />
            <Scene key='beersMenu' component={MenuBeersScreen} title='Beers' />
            <Scene key='shotsMenu' component={MenuShotsScreen} title='Shots' />
            <Scene key='cocktailsMenu' component={MenuCocktailsScreen} title='Cocktails' />

            <Scene key='barLandingScreen' component={BarLandingScreen} title='' />
            <Scene key='creditCardFormScreen' component={CreditCardFormScreen} title='Credit Card' />
            <Scene key='geolocationTestScreen' component={GeolocationTestScreen} title='Geolocation Test Screen' />
          </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
