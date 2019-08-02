import {getBaoZhuang} from '../services/baoZhuang'


export default {

  namespace: 'baoZhuang',
  state: {
    data:[],
  },
  effects: {
    *fetch(_, {call, put}) {
      const response = yield call(getBaoZhuang);
      const data1 = response.baoZhuang
      yield put({
        type: 'save',
        payload: data1,
      });
    },
  },

  reducers: {
    save(state, {payload}) {
      return {state,
        data:payload };
    },
  },
};
