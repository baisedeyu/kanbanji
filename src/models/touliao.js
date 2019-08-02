import { querytouliao } from '../services/api';

export default {

  namespace :'touliao',

  state:{
    data:[],
  },

  effects: {
    *fetchData(_, {call, put}) {
      const response = yield call(querytouliao);
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
