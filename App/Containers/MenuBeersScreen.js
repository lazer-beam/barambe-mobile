// @flow

import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import { Metrics, Images, Colors } from '../Themes'
import MenuFullButton from '../Components/MenuFullButton'
import ViewTabBtn from '../Components/MenuViewTabBtn'

// Styles
import styles from './Styles/MenuBarScreenStyle'

export default class MenuBeers extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      beerClicked: null
    }

    this.displayBeerModal = this.displayBeerModal.bind(this)
  }

  displayBeerModal (beer) {
    this.setState({
      beerClicked: beer
    })
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <Image source={Images.barMockHeader} style={styles.menuHeaderImage} resizeMode='stretch' />
        <ScrollView style={styles.menuContainer} ref='container' scrollEnabled={false}>
          {this.props.beers.map(beer => <MenuFullButton
            onClickedItem={this.displayBeerModal}
            item={beer}
            price={beer.price}
            text={beer.name}
            key={beer.name}
            styles={{marginTop: 0, marginBottom: 0, backgroundColor: Colors.barambeBlack}}
          />)}
        </ScrollView>
        <ViewTabBtn />
      </View>
    )
  }
}
