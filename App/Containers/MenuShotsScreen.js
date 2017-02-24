// @flow

import React from 'react'
import { ScrollView, View, Image, Button } from 'react-native'
import { Metrics, Images } from '../Themes'
import MenuFullButton from '../Components/MenuFullButton'
import OrderModal from './MenuOrderModal'

// Styles
import styles from './Styles/MenuBarScreenStyle'

export default class MenuShots extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      renderModal: false,
      shotClicked: null
    }
    this.displayShotModal = this.displayShotModal.bind(this)
  }

  displayShotModal (shot) {
    console.log('displayShotModal', shot)
    this.setState({
      renderModal: true,
      shotClicked: shot
    })
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <Image source={Images.barMockHeader} style={styles.menuHeaderImage} resizeMode='stretch' />
        <ScrollView style={styles.container} ref='container'>
          {this.props.shots.map(shot => <MenuFullButton onClickedItem={this.displayShotModal} item={shot} price={shot.price} text={shot.name} key={shot.name} styles={{marginTop: 0, marginBottom: 0, backgroundColor: '#1A2930'}} />)}
        </ScrollView>
        {this.state.renderModal ? <OrderModal order={this.state.shotClicked} /> : <OrderModal />}
        <Button title='Close Tab' onPress={() => { console.log('closing tab') }} />
      </View>
    )
  }
}
