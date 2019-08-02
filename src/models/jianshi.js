import { queryjianshi } from '../services/api';

export default {

  namespace :'jianshi',

  state:{
    data:[],
  },

  effects: {
    *fetchData(_, {call, put}) {
      const response = yield call(queryjianshi);
      yield put({
        type: 'show',
        payload: response,
      });
    },

  },
  reducers: {
    show(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  }
}
