import React from 'react'
import { connect } from 'react-redux'
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native'
import {Actions} from 'react-native-router-flux'

import LoginActions from '../Redux/LoginRedux'

@connect(store => ({
  initApp: store.login.initApp,
}))
export default class Launch2 extends React.Component {
componentDidMount() {
  setTimeout(() => { 
    Actions.login()
  }, 2000)
}
  render(){
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#3c3c3c'}} /> 
      </View>
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