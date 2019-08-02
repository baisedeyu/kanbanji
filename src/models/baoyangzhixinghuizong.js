import { getbyzxhz } from '../services/shebeiguanli';

export default {
  namespace: 'baoyangzhixinghuizong',
  state: {
    data: [],
    huizong:[],
  },
  effects: {
    * fetchData({ payload }, { select, call, put }) {
      const response = yield call(getbyzxhz,payload);
      if (response.IsSuccess) {
        const huizong=response.data.pop()
        yield put({
          type: 'saveData',
          payload: response.data,
          huizong
        });
      }
    },
  },
  reducers: {
    saveData(state, { payload ,huizong}) {
      return {
        ...state,
        data: payload,
        huizong
      };
    },
  },

};
