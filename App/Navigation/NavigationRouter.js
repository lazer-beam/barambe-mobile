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
import TableScreen from '../Containers/TableScreen'

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
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='presentationScreen' component={PresentationScreen} title='Ignite' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='componentExamples' component={AllComponentsScreen} title='Components' />
            <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={() => window.alert('Example Pressed')} />
            <Scene key='login' component={LoginScreen} title='Login' hideNavBar />
            <Scene key='listviewExample' component={ListviewExample} title='Listview Example' />
            <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
            <Scene key='listviewSectionsExample' component={ListviewSectionsExample} title='Listview Sections' />
            <Scene key='listviewSearchingExample' component={ListviewSearchingExample} title='Listview Searching' navBar={CustomNavBar} />
            <Scene key='mapviewExample' component={MapviewExample} title='Mapview Example' />
            <Scene key='apiTesting' component={APITestingScreen} title='API Testing' />
            <Scene key='theme' component={ThemeScreen} title='Theme' />

            <Scene key='barMenu' component={MenuBarScreen} title='Bar Menu' />
            <Scene key='beersMenu' component={MenuBeersScreen} title='Beers Menu' />
            <Scene key='shotsMenu' component={MenuShotsScreen} title='Shots Menu' />
            <Scene key='cocktailsMenu' component={MenuCocktailsScreen} title='Cocktails Menu' />

            {/* Custom navigation bar example */}
            <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info' />
            <Scene key='barLandingScreen' component={BarLandingScreen} title='Bar Landing Screen' />
            <Scene key='creditCardScreen' component={CreditCardScreen} title='Credit Cards' />
            <Scene key='creditCardFormScreen' component={CreditCardFormScreen} title='Credit Card Form' />
            <Scene key='tableScreen' component={TableScreen} title='Table Screen' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
