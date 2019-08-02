import { queryrongjielu } from '../services/api';

export default {

  namespace :'rongjielu',

  state:{
    data:[],
    jianshi:[],
  },

  effects: {
    *fetchData(_, {call, put}) {
      const response = yield call(queryrongjielu);

      yield put({
        type: 'show',
        payload: response.data.data,
      });
    },

  },
  reducers: {
    show(state, {payload}) {
      return {
        ...state,
        data:payload
      };
    },
  }
}
