import React from 'react'
<<<<<<< 46530d001f7b75bece463fa2362e5e275d848367
<<<<<<< 94dc9785d67ef27c4273a03ff0a37377309b5070
import { Modal, TouchableHighlight, ScrollView, View, Button, TextInput } from 'react-native'
=======
import { ScrollView, View, Button, TextInput } from 'react-native'
>>>>>>> [progress]Format barLanding
=======
import { Modal, TouchableHighlight, ScrollView, View, Button, TextInput } from 'react-native'
>>>>>>> [progress]Reformat barLanding, add addl data input
import { Actions as NavigationActions } from 'react-native-router-flux'
import Form from 'react-native-form'

// Styles
import styles from './Styles/MenuBarScreenStyle'

export default class CreditCardFormScreen extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
<<<<<<< 46530d001f7b75bece463fa2362e5e275d848367
<<<<<<< 94dc9785d67ef27c4273a03ff0a37377309b5070
      table: '',
      modalVisible: false
    }
    this.submitTable = this.submitTable.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
=======
      table: ''
    }
    this.submitTable = this.submitTable.bind(this);
>>>>>>> [progress]Format barLanding
=======
      table: '',
      modalVisible: false
    }
    this.submitTable = this.submitTable.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
>>>>>>> [progress]Reformat barLanding, add addl data input
  }

  submitTable() {
    this.props.changeTable(this.state.table)
    NavigationActions.barLandingScreen()
  }

  render () {
    return (
<<<<<<< 46530d001f7b75bece463fa2362e5e275d848367
<<<<<<< 94dc9785d67ef27c4273a03ff0a37377309b5070
=======
>>>>>>> [progress]Reformat barLanding, add addl data input
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    );
    /*return (
<<<<<<< 46530d001f7b75bece463fa2362e5e275d848367
=======
>>>>>>> [progress]Format barLanding
=======
>>>>>>> [progress]Reformat barLanding, add addl data input
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
<<<<<<< 46530d001f7b75bece463fa2362e5e275d848367
<<<<<<< 94dc9785d67ef27c4273a03ff0a37377309b5070
    )*/
=======
    )
>>>>>>> [progress]Format barLanding
=======
    )*/
>>>>>>> [progress]Reformat barLanding, add addl data input
  }
}