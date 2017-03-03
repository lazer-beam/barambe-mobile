// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { Scene, Router, Actions, Modal } from 'react-native-router-flux'
import {Colors} from '../Themes'

import Styles from './Styles/NavigationContainerStyle'
import BarLandingScreen from '../Components/BarLandingScreen'
import CreditCardFormScreen from '../Components/CreditCardFormScreen'
import NearbyBarsScreen from '../Components/NearbyBarsScreen'

import MenuBarScreen from '../Components/MenuBarScreen'
import MenuBeersScreen from '../Components/MenuBeersScreen'
import MenuShotsScreen from '../Components/MenuShotsScreen'
import MenuCocktailsScreen from '../Components/MenuCocktailsScreen'

import LoginContainer from '../Containers/LoginContainer'
import Launch from '../Containers/Launch'
import Launch2 from '../Containers/Launch2'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

export default class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key="modal" component={Modal}>
          <Scene key="root" hideNavBar={true}>
          
            <Scene key="launch" component={Launch} title="Launch" initial={true} style={{flex:1, backgroundColor:'transparent'}} hideNavBar={true}/>
            <Scene key="launch2" component={Launch2} title="Launch" style={{flex:1, backgroundColor:'transparent'}} hideNavBar={true}/>

            <Scene key="login" direction="vertical">
              <Scene key='lock' component={LoginContainer} title='Login' direction="vertical" hideNavBar />
            </Scene>

            <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
              <Scene initial key='nearbyBarsScreen' component={NearbyBarsScreen} title='BARAMBE' />
              <Scene key='barLandingScreen' component={BarLandingScreen} title='BARAMBE' />
              <Scene key='barMenu' component={MenuBarScreen} title='Menu' />
              <Scene key='beersMenu' component={MenuBeersScreen} title='Beers' />
              <Scene key='shotsMenu' component={MenuShotsScreen} title='Shots' />
              <Scene key='cocktailsMenu' component={MenuCocktailsScreen} title='Cocktails' />
              <Scene key='creditCardFormScreen' component={CreditCardFormScreen} title='Credit Card' />
            </Scene>

          </Scene>
        </Scene>
      </Router>
    )
  }
}