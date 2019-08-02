import { getsbzxhz } from '../services/shebeiguanli';

export default {
  namespace: 'dianjianzhixinhuizong',
  state: {
    TotalCount:0,
    data: [],
    huizong:[],
  },
  effects: {
    *fetchData({payload}, {select, call, put }) {
      const response = yield call(getsbzxhz,payload);
      if (response.IsSuccess){
        const huizong=response.data.pop()
        yield put({
          type: 'saveData',
          payload: response.data,
          huizong
        })
      }
    },
  },
  reducers: {
    saveData(state, {payload,huizong}) {
      return{
        ...state,
        data:payload,
        huizong
      }
    },

  },
};
