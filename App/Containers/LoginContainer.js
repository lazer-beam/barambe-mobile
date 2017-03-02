
import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  Button,
  LayoutAnimation
} from 'react-native'

import { connect } from 'react-redux'
import {Images, Metrics, Colors} from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import CustomerActions from '../Redux/CustomerRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Config from 'react-native-config'

import Reactotron from 'reactotron-react-native'

import Auth0Lock from 'react-native-lock'

class LoginContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.lock = new Auth0Lock({clientId: 'e7Cg7lClPf4Tky0Z27iz83E732KPVnXX', domain: 'eliotjunior.auth0.com'})
  }

  componentDidMount() {
    this.lock.show({closable: true}, (err, profile, token) => {
      if (err) {
        Reactotron.log('ERROR!!!!!')
        return
      }
      NavigationActions.drawerChildrenWrapper()
      Reactotron.log('BOOBZZZ!!!')
      this.props.setName(profile.name)
      Reactotron.log(profile)
    })
  }
  
  render() {
    return (
      <ScrollView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // fetching: state.login.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: name => dispatch(CustomerActions.setCustomerName(name))
    // attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#0A1612',
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 300,
  },
  card2: {
    padding: 16,
  },
  input: {
    marginTop: 4,
    color: Colors.app1,
  },
  label: {
    marginTop: 4,
    color: Colors.app1,
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: Colors.app1,
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  top: {
    backgroundColor: Colors.backgroundLight,
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
