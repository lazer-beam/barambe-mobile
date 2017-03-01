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

class MenuShots extends React.Component {
  constructor (props: Object) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight,
      shotClicked: null
    }
    this.displayShotModal = this.displayShotModal.bind(this)
    this.renderTabHistory = this.renderTabHistory.bind(this)
  }

  displayShotModal (shot) {
    this.setState({
      shotClicked: shot
    })
  }

  renderTabHistory () {
    this.props.renderTabView(true)
  }

  render () {
    return (
      <View style={styles.blackContainer}>
        <Image source={{uri: this.props.currBar}} style={styles.menuHeaderImage} resizeMode='stretch' />
        <ScrollView style={styles.container} ref='container'>
          {this.props.displayTab
          ? <MenuViewTabScreen />
          : this.props.shots.map(shot => <MenuFullButton
            buyDrink={this.props.buyDrink}
            onClickedItem={this.displayShotModal}
            item={shot} price={shot.price}
            text={shot.name}
            key={shot.name}
            table={this.props.table}
            styles={{marginTop: 0, marginBottom: 0, backgroundColor: Colors.barambeBlack}}
            />)
          }
        </ScrollView>

        <ViewTabBtn renderTabHistory={this.renderTabHistory} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    displayTab: state.customer.displayTab,
    shots: state.customer.shots,
    currBar: state.bars.currBar
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderTabView: display => dispatch(CustomerActions.renderTabView(display))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuShots)
