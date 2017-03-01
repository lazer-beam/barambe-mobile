import React from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'

import CustomerActions from '../Redux/CustomerRedux'
import { Colors } from '../Themes'

class ViewTabBtn extends React.Component {
  constructor (props) {
    super(props)

    this.closeTab = this.closeTab.bind(this)
  }

  closeTab () {
    this.props.closeTab()
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
    displayTab: state.customer.displayTab
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderTabView: display => dispatch(CustomerActions.renderTabView(display)),
    closeTab: () => dispatch(CustomerActions.closeTab())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTabBtn)
