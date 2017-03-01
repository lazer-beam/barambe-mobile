import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setBars: ['bars'],
  setCurrBar: ['bar']
})

export const barTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  bars: [{
          subdomain: 'http://barambe.paddyspub.com/',
          stripe: 'acct_19nbJhDCKIISg37F',
          picture: 'http://img04.deviantart.net/4281/i/2010/010/f/6/paddy__s_pub_by_detroitchicago.jpg',
          location: ['33.978035', '-118.391949'],//lat longitude
          authId: 'paddyspub',
          name: "Paddy's Pub"
        },{
          subdomain: 'http://barambe.accomplicebar.com/',
          stripe: 'acct_19nbJhDCKIISg37F',
          picture: 'https://cdn0.vox-cdn.com/uploads/chorus_image/image/51853251/2016-07-11-statuskuo-003.0.0.jpeg',
          location: ['34.004392', '-118.431099'],
          authId: 'accomplice',
          name: 'Accomplice Bar'
        },{
          subdomain: 'http://barambe.leialoha.com/',
          stripe: 'acct_19nbJhDCKIISg37F',
          picture: 'https://assets3.thrillist.com/v1/image/1407261/size/tmg-article_default_mobile.jpg',
          location: ['33.959840', '-118.379463'],
          authId: 'leialoha',
          name: 'Lei Aloha'
        }, {
          subdomain: 'http://barambe.brennans.com/',
          stripe: 'acct_19nbJhDCKIISg37F',
          picture: 'http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/xb5aqbxcistlm5nr8exm.jpg',
          location: ['33.988312', '-118.446091'],
          authId: 'brennans',
          name: 'Brennan\'s Pub'
        },{
          subdomain: 'http://barambe.joxersdalys.com/',
          stripe: 'acct_19nbJhDCKIISg37F',
          picture: 'https://s3-us-west-1.amazonaws.com/media.citycheers.com/u/1407518378-JoxersSlider.png',
          location: ['34.007789', '-118.412340'],
          authId: 'joxersdalys',
          name: 'Joxer\'s Daly\'s'
        }],
  currBar: ''
})

/* ------------- Reducers ------------- */

export const setBars = (state: Object, { bars }: Object) =>
  Immutable.merge(state, { bars: bars })

export const setCurrBar = (state: Object, { bar }: String) =>
  Immutable.merge(state, { currBar: bar })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_BARS]: setBars,
  [Types.SET_CURR_BAR]: setCurrBar
})
