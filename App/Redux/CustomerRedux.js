import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addOrder: ['order'],
  closeTab: [],
  renderTabView: ['display']
})

export const customerTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  paidOrders: [],
  displayTab: false
})

/* ------------- Reducers ------------- */

export const addOrder = (state: Object, { order }: Object) =>
  Immutable.merge(state, { paidOrders: state.paidOrders.concat(order) })

export const closeTab = () => INITIAL_STATE

export const renderTabView = (state: Object, { display }: Boolean) =>
  Immutable.merge(state, { displayTab: display })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ORDER]: addOrder,
  [Types.CLOSE_TAB]: closeTab,
  [Types.RENDER_TAB_VIEW]: renderTabView
})
