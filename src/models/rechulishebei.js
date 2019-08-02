import { queryrechulishebei } from '../services/api';

export default {

  namespace :'rechulishebei',

  state:{
    data:[],
    data1:[],
    data2:[]
  },

  effects: {
    *fetchData(_, {call, put}) {
      const response = yield call(queryrechulishebei);
      // console.log(response,312231)
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
        data:payload.lstDeviceEkanInfo,
        data1:payload.lstDeviceState
      };
    },
  }
}
