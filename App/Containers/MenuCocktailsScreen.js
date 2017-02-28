// @flow

import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import { connect } from 'react-redux'

import CustomerActions from '../Redux/CustomerRedux'
import { Metrics, Images, Colors } from '../Themes'
import MenuFullButton from './MenuFullButton'
import MenuViewTabScreen from './MenuViewTabScreen'
import ViewTabBtn from './MenuViewTabBtn'

// Styles
import styles from './Styles/MenuBarScreenStyle'

class MenuCocktail extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      cocktailClicked: null
    }
    this.displayCocktailModal = this.displayCocktailModal.bind(this)
    this.renderTabHistory = this.renderTabHistory.bind(this)
  }

  displayCocktailModal (shot) {
    this.setState({
      cocktailClicked: shot
    })
  }

  renderTabHistory () {
    this.props.renderTabView(true)
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <Image source={Images.barMockHeader} style={styles.menuHeaderImage} resizeMode='stretch' />
        <ScrollView style={styles.container} ref='container'>
<<<<<<< ead0e6e20cd2ab5812177c8a8edc1252cf2db694
          {this.props.displayTab
          ? <MenuViewTabScreen />
          : this.props.cocktails.map(cocktail => <MenuFullButton
=======
          {this.props.cocktails.map(cocktail => <MenuFullButton
            buyDrink={this.props.buyDrink}
>>>>>>> [feat]Add pay functionality to menu screens
            onClickedItem={this.displayCocktailModal}
            item={cocktail}
            price={cocktail.price}
            text={cocktail.name}
            key={cocktail.name}
            table={this.props.table}
            styles={{marginTop: 0, marginBottom: 0, backgroundColor: Colors.barambeBlack}}
          />)}
        </ScrollView>

        <ViewTabBtn renderTabHistory={this.renderTabHistory} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    displayTab: state.customer.displayTab
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderTabView: display => dispatch(CustomerActions.renderTabView(display))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuCocktail)
