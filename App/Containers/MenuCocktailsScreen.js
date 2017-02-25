// @flow

import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import { Metrics, Images, Colors } from '../Themes'
import MenuFullButton from '../Components/MenuFullButton'
import ViewTabBtn from '../Components/MenuViewTabBtn'

// Styles
import styles from './Styles/MenuBarScreenStyle'

export default class MenuCocktail extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      cocktailClicked: null
    }
    this.displayCocktailModal = this.displayCocktailModal.bind(this)
  }

  displayCocktailModal (shot) {
    this.setState({
      cocktailClicked: shot
    })
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <Image source={Images.barMockHeader} style={styles.menuHeaderImage} resizeMode='stretch' />
        <ScrollView style={styles.container} ref='container'>
          {this.props.cocktails.map(cocktail => <MenuFullButton
            onClickedItem={this.displayCocktailModal}
            item={cocktail}
            price={cocktail.price}
            text={cocktail.name}
            key={cocktail.name}
            styles={{marginTop: 0, marginBottom: 0, backgroundColor: Colors.barambeBlack}}
          />)}
        </ScrollView>
        <ViewTabBtn />
      </View>
    )
  }
}
