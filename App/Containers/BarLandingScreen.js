import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, Text, Image, TextInput, View } from 'react-native'
import FullButton from '../Components/FullButton'
import styles from './Styles/BarLandingScreenStyle'
import headerStyle from './Styles/MenuHeaderStyle'
import { Images } from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux';

// import styles from 'SOMEWHERE'

export default class BarScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tableNum: 'Input Table Number'
    }
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
          <Image style={{
            position: 'absolute',
            top: 150,
            left: 0,
            bottom: 0,
            right: 0}}
            source={{uri:'https://www.placecage.com/300/200'}}
            resizeMode='stretch'/>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Paddy's Pub
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Payment
            </Text>
            <Text>
              {/*Normally insert this.props.cardNickname, this.props.Last4Digits*/}
              Andrew Credit 7259
            </Text>
            <Text onPress={NavigationActions.creditCardScreen}>
              Change
            </Text>
          </View>          
        </ScrollView>
        <FullButton text='OPEN TAB' />
      </View>
    )
  }
}