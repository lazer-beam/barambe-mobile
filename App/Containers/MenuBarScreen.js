// @flow

import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import CustomerActions from '../Redux/CustomerRedux'
import { Metrics, Images, Colors } from '../Themes'
import MenuFullButton from './MenuFullButton'
import ViewTabBtn from './MenuViewTabBtn'
import MenuViewTabScreen from './MenuViewTabScreen'
import MenuConfig from '../Config/MenuConfig'

// Styles
import styles from './Styles/MenuBarScreenStyle'

const DOMAIN = MenuConfig.domain

class MenuBarScreen extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      beers: [],
      shots: [],
      cocktails: [],
      addIns: []
    }

    this.renderBeerMenu = this.renderBeerMenu.bind(this)
    this.renderShotsMenu = this.renderShotsMenu.bind(this)
    this.renderCocktailsMenu = this.renderCocktailsMenu.bind(this)
    this.convertPrices = this.convertPrices.bind(this)
    this.renderTabHistory = this.renderTabHistory.bind(this)
  }

  componentDidMount () {
    RNFetchBlob.fetch('GET', `${DOMAIN}/drinks/getall/`)
      .then(res => {
        this.generateDrinksArrs(res.json())
      }).catch(err => {
        console.log('err', err)
      })
  }

  generateDrinksArrs (json) {
    this.setState({
      beers: this.convertPrices(json.beerArr),
      shots: this.convertPrices(json.liquorArr),
      cocktails: this.convertPrices(json.cocktailArr),
      addIns: this.convertPrices(json.addInArr)
    })
  }

  convertPrices (items) {
    return items.map(item => {
      item.price = item.price ? (item.price / 100).toFixed(2) : null
      return item
    })
  }

  renderBeerMenu () {
    NavigationActions.beersMenu({ beers: this.state.beers })
  }

  renderShotsMenu () {
    NavigationActions.shotsMenu({ shots: this.state.shots })
  }

  renderCocktailsMenu () {
    NavigationActions.cocktailsMenu({
      cocktails: this.state.cocktails,
      liquors: this.state.shots,
      addIns: this.state.addIns
    })
  }

  renderTabHistory () {
    this.props.renderTabView(true)
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <ScrollView style={styles.container} ref='container'>
          <Image source={Images.barMockHeader} style={styles.menuHeaderImage} resizeMode='stretch' />
          {this.props.displayTab
          ? <MenuViewTabScreen />
          : <View>
            <MenuFullButton text={'Beer Menu'}
              onClickedItem={() => { this.renderBeerMenu() }}
              styles={{marginBottom: 0, backgroundColor: Colors.barambeBlack}}
              key={1}
            />
            <MenuFullButton text={'Shots Menu'}
              onClickedItem={() => { this.renderShotsMenu() }}
              styles={{marginBottom: 0, marginTop: 0, backgroundColor: Colors.barambeBlack}}
              key={2}
            />
            <MenuFullButton text={'Cocktails Menu'}
              onClickedItem={() => { this.renderCocktailsMenu() }}
              styles={{marginTop: 0, backgroundColor: Colors.barambeBlack}}
              key={3}
            />
          </View>}

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

export default connect(mapStateToProps, mapDispatchToProps)(MenuBarScreen)
