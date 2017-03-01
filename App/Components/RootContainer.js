// @flow

import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import NavigationRouter from '../Navigation/NavigationRouter'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

// Styles
import styles from './Styles/RootContainerStyle'

class RootContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temp: this.props.currBar
    }
  }
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <NavigationRouter />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
