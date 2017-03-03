
import React from 'react'
import Config from 'react-native-config'
import Promise from 'bluebird'
import Reactotron from 'reactotron-react-native'
import Auth0Lock from 'react-native-lock'
import axios from 'axios'

import { axiosAuth, isTokenExpired } from '../Services/AuthServices'
import { StyleSheet, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'

import {Images, Metrics, Colors} from '../Themes'
import LoginActions from '../Redux/LoginRedux'

@connect(store => ({
  loggedIn: store.login.loggedIn,
  refreshToken: store.login.refreshToken,
  idToken: store.login.idToken,
}))
export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.lock = new Auth0Lock({clientId: Config.LOGIN_CLIENTID, domain: Config.LOGIN_DOMAIN})
    this.lock.show = Promise.promisify(this.lock.show, {multiArgs: true})
    this.lock.show.bind(this)
  }

  componentDidMount() {
    
    if(!this.props.loggedIn && !!this.props.refreshToken && isTokenExpired(this.props.idToken) ) {
      axios.post('https://barambe-mobile.auth0.com/delegation', axiosAuth(this.props.refreshToken))
      .then(res => {
        NavigationActions.drawerChildrenWrapper()
      }).catch(err => {
        this.props.dispatch(LoginActions.logout())
        NavigationActions.launch2()
      })
    } else if(!this.props.loggedIn || !this.props.refreshToken) {
      this.lock.show({}).spread((profile, token) => {
        this.props.dispatch(LoginActions.loginSuccess(profile, token.refreshToken, token.idToken, token.accessToken))
        NavigationActions.drawerChildrenWrapper()
      })
    } else {
      NavigationActions.drawerChildrenWrapper()
    }
  }
  
  render() {
    return (
      <ScrollView>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
})
