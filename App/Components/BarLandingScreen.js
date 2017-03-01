import React from 'react'
import { TextInput, Text, ScrollView, View, Image, Button } from 'react-native'
import RNFetchBlob from 'react-native-fetch-blob'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import CustomerActions from '../Redux/CustomerRedux'
import { Metrics, Images, Colors } from '../Themes'
import MenuConfig from '../Config/MenuConfig'

// Styles
import styles from './Styles/BarLandingScreenStyle'

const DOMAIN = MenuConfig.domain

class BarLandingScreen extends React.Component {
  constructor (props: Object) {
    super(props)

    this.state = {
      table: '',
      // the below should be props
      cardBrand: 'Visa',
      cardLast4: '4242',
      customerStripe: 'cus_AB1NVGME7exD4z',
      barStripe: 'acct_19nbJhDCKIISg37F',
      barName: "Paddy's Pub",
      fetching: true
    }

    this.renderCardForm = this.renderCardForm.bind(this)
    this.renderMenuBar = this.renderMenuBar.bind(this)
    this.changeTable = this.changeTable.bind(this)
    this.generateDrinksArrs = this.generateDrinksArrs.bind(this)
    this.convertPrices = this.convertPrices.bind(this)
  }

  // add a component mount that retrieves card info, need for changing cards -- should re-render with new card info
  componentDidMount() {
    RNFetchBlob.fetch('GET', `${DOMAIN}/drinks/getall/`)
      .then(res => {
        this.setState({ fetching: false })
        this.generateDrinksArrs(res.json())
      }).catch(err => {
        console.log('err', err)
      })
  }

  changeTable (tableNum) {
    this.setState({table: tableNum})
  }

  renderTableScreen () {
    NavigationActions.tableScreen({
      changeTable: this.changeTable
    })
  }

  renderCardForm () {
    NavigationActions.creditCardFormScreen()
  }

  renderMenuBar() {
    NavigationActions.barMenu({
      table: this.state.table,
      customerStripe: this.state.customerStripe,
      barStripe: this.props.barStripe
    })
  }

  generateDrinksArrs (json) {
    this.props.setBeers(this.convertPrices(json.beerArr))
    this.props.setShots(this.convertPrices(json.liquorArr))
    this.props.setCocktails(this.convertPrices(json.cocktailArr))
    this.props.setAddIns(this.convertPrices(json.addInArr))
  }

  convertPrices (items) {
    return items.map(item => {
      item.price = item.price ? (item.price / 100).toFixed(2) : null
      return item
    })
  }

  render () {
    return (
      <View style={styles.barLandingContainer}>
        <ScrollView style={styles.container} ref='container'>
          <Image source={{uri: this.props.picture}}
            style={styles.headerImage}
            resizeMode='stretch'
          />
          <View style={styles.tableInfo}>
            <Text style={{color:'#C5C1C0', fontSize: 17}}>TABLE NUMBER (optional):</Text>
          </View>
          <TextInput type="TextInput"
            name="tableNumber"
            placeholder="Enter Table Number"
            placeholderTextColor="#F7CE3E"
            underlineColorAndroid="#C5C1C0"
            onChangeText={(text) => this.setState({table: text})}
            value={this.state.table}
            style={{ color:'#F7CE3E' }}
          />
          <View style={styles.currentCard}>
            <Text style={{color:'#C5C1C0', fontSize: 17}}>ACTIVE CARD:</Text>
            <Text style={{color:'#C5C1C0', fontSize: 15}}>{this.state.cardBrand} {this.state.cardLast4}</Text>
          </View>
          <View style={styles.changeCardBtn}>
            <Button onPress={() => { this.renderCardForm() }} color={Colors.barambeBlack} title='Change Card' />
          </View>
        </ScrollView>
        {this.state.fetching
          ? <Button disabled color={"#000"} title='Open Tab' onPress={() => { this.renderMenuBar() }}></Button>
          : <Button color={Colors.barambeBlack} title='Open Tab' onPress={() => { this.renderMenuBar() }}></Button>
        }
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
    setBeers: beers => dispatch(CustomerActions.setBeers(beers)),
    setShots: shots => dispatch(CustomerActions.setShots(shots)),
    setCocktails: cocktails => dispatch(CustomerActions.setCocktails(cocktails)),
    setAddIns: addIns => dispatch(CustomerActions.setAddIns(addIns))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarLandingScreen)