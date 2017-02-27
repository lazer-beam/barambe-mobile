import React from 'react'
import { ScrollView, View, Button, TextInput } from 'react-native'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Form from 'react-native-form'

// Styles
import styles from './Styles/MenuBarScreenStyle'

export default class CreditCardFormScreen extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      table: ''
    }
    this.submitTable = this.submitTable.bind(this);
  }

  submitTable() {
    this.props.changeTable(this.state.table)
    NavigationActions.barLandingScreen()
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <ScrollView style={styles.container} ref='container'>
        <Form ref="form">
          <TextInput type="TextInput" 
          name="TableNumber" 
          placeholder="Table Number" 
          placeholderTextColor="#F7CE3E" 
          onChangeText={(text) => this.setState({table: text})} 
          value={this.state.table} 
          style={{backgroundColor:'#1A2930', color:'#F7CE3E'}} />               
        </Form>
        </ScrollView>
        <Button title='Submit Card' onPress={() => { this.submitTable() }}>Submit Table Number</Button>
      </View>
    )
  }
}