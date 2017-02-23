
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
  LayoutAnimation
} from 'react-native'

import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyle'
import {Images, Metrics, Colors} from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

import { Hoshi, Sae } from 'react-native-textinput-effects'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

class LoginContainer extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      visibleHeight: Metrics.screenHeight,
    }
  }

  render() {
    return (
      <ScrollView 
        contentContainerStyle={{justifyContent: 'center'}} 
        style={[Styles.container, { backgroundColor: Colors.backgroundLight },{height: this.state.visibleHeight}]} 
        keyboardShouldPersistTaps>
        <View style={[styles.card2, { backgroundColor: Colors.backgroundLight }]}>
          <Text style={styles.title}>Login</Text>
          <Sae
            label={'Email Address'}
            labelStyle={styles.label}
            inputStyle={styles.input}
            iconClass={FontAwesomeIcon}
            iconName={'pencil'}
            iconColor={Colors.app1}
          />
          <Sae
            label={'Password'}
            inputStyle={styles.input}
            labelStyle={styles.label}
            iconClass={FontAwesomeIcon}
            iconName={'pencil'}
            iconColor={Colors.app1}
          />
        </View>
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
