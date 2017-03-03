import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addOrder: ['order'],
  closeTab: null,
  renderTabView: ['display'],
  setBeers: ['beers'],
  setShots: ['shots'],
  setCocktails: ['cocktails'],
  setAddIns: ['addIns'],
  setLongitude: ['longitude'],
  setLatitude: ['latitude'],
  setCustomerName: ['name'],
  setTabId: ['tabId'],
  setCustomerStripe: ['customerStripe'],
  setCard: ['brandAndDigits']
})

export const customerTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  paidOrders: [],
  displayTab: false,
  beers: [],
  shots: [],
  cocktails: [],
  addIns: [],
  currentLongitude: '-118.390891',
  currentLatitude: '33.976002',
  customerName: 'INITIAL STATE',
  tabId: 4,
  customerStripe: 'cus_AB1NVGME7exD4z',
  brandAndDigits: ['Visa', '4242'],
})

/* ------------- Reducers ------------- */

export const addOrder = (state: Object, { order }: Object) =>
  Immutable.merge(state, { paidOrders: state.paidOrders.concat(order) })

export const closeTab = (state: Object) => 
  Immutable.merge(state, {
    paidOrders: [],
    displayTab: false
  })

export const renderTabView = (state: Object, { display }: Boolean) =>
  Immutable.merge(state, { displayTab: display })

export const setBeers = (state: Object, { beers }: Object) =>
  Immutable.merge(state, { beers: beers })

export const setShots = (state: Object, { shots }: Object) =>
  Immutable.merge(state, { shots: shots })

export const setCocktails = (state: Object, { cocktails }: Object) =>
  Immutable.merge(state, { cocktails: cocktails })

export const setAddIns = (state: Object, { addIns }: Object) =>
  Immutable.merge(state, { addIns: addIns })

export const setLongitude = (state: Object, { longitude }: String) =>
  Immutable.merge(state, { longitude: longitude })

export const setLatitude = (state: Object, { latitude }: String) =>
  Immutable.merge(state, { latitude: latitude })

export const setCustomerName = (state: Object, { name }) =>
  Immutable.merge(state, { customerName: name })

export const setTabId = (state: Object, { tabId }) =>
  Immutable.merge(state, { tabId: tabId })

export const setCustomerStripe = (state: Object, { customerStripe }) =>
  Immutable.merge(state, { customerStripe: customerStripe })

export const setBrandAndDigits = (state: Object, { brandAndDigits }) =>
  Immutable.merge(state, { brandAndDigits: brandAndDigits })
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ORDER]: addOrder,
  [Types.CLOSE_TAB]: closeTab,
  [Types.RENDER_TAB_VIEW]: renderTabView,
  [Types.SET_BEERS]: setBeers,
  [Types.SET_SHOTS]: setShots,
  [Types.SET_COCKTAILS]: setCocktails,
  [Types.SET_ADDINS]: setAddIns,
  [Types.SET_LONGITUDE]: setLongitude,
  [Types.SET_LATITUDE]: setLatitude,
  [Types.SET_CUSTOMER_NAME]: setCustomerName,
  [Types.SET_TAB_ID]: setTabId,
  [Types.SET_CUSTOMER_STRIPE]: setCustomerStripe,
  [Types.SET_BRAND_AND_DIGITS]: setBrandAndDigits,
})
