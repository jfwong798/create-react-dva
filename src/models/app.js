import { localStorage, config } from '../utils'

const { loadState, saveState } = localStorage
const { langOptions } = config

let lang = loadState('lang')
if (langOptions.indexOf(lang) === -1) {
  lang = 'zh_CN'
}

export default {
  namespace: 'app',
  state: {
    name: '这是app的model',
    lang,
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({
        type: 'changeLang',
        payload: {
          lang,
        },
      })
    },
  },
  effects: {
    *changeLang({ payload }, { put }) {
      const { lang } = payload
      saveState('lang', lang)
      yield put({
        type: 'updateLang',
        payload: { lang },
      })
    },
  },
  reducers: {
    updateLang(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
  },
}
