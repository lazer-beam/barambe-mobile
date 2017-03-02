import React from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'

import CustomerActions from '../Redux/CustomerRedux'
import { Colors } from '../Themes'
import MenuConfig from '../Config/MenuConfig'

const DOMAIN = MenuConfig.domain

class ViewTabBtn extends React.Component {
  constructor (props) {
    super(props)

    this.closeTab = this.closeTab.bind(this)
  }

  closeTab () {
    this.props.closeTab()
    fetch(`${DOMAIN}/tabs/closetab/${this.props.tabId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT'
    }).then(res => res.text()
    ).then(text => {
      console.log(text)
      NavigationActions.nearbyBarsScreen()
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      this.props.displayTab
      ? <Button
          title='Close Tab'
          onPress={this.closeTab}
          color={Colors.barambeBlue}
        />
      : <Button
          color={Colors.barambeBlue}
          title='View Tab'
          onPress={this.props.renderTabHistory}
        />
    )
  }
}

const mapStateToProps = state => {
  return {
    displayTab: state.customer.displayTab,
    tabId: state.customer.tabId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderTabView: display => dispatch(CustomerActions.renderTabView(display)),
    closeTab: () => dispatch(CustomerActions.closeTab())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTabBtn)
