import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native'
import {Actions} from 'react-native-router-flux'

class Launch extends React.Component {
componentDidMount() {
  setTimeout(() => {
    Actions.login()
  }, 3000)
}
  render(){
    return (
      <View style={styles.container}>
        <Image style={{width: 300, height: 300}} source={{uri: 'http://i.imgur.com/mvywlbT.png'}}/>
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
});

module.exports = Launch;