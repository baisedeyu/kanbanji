import { querydiyazhuzao } from '../services/api';

export default {

  namespace :'diyazhuzao',

  state:{
    diyadata1:[],
  },

  effects: {
    *fetchData(_, {call, put}) {
      const response = yield call(querydiyazhuzao);
      // console.log(response)
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
        diyadata1:payload
      };
    },
  }
}
