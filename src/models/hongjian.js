import { gethongjian } from '../services/api';

export default {
  namespace: 'hongjian',
  state: {
    payload: 0,
  },
  effects: {
    * fetchdata(payload, { call, put }) {
      function cs() {
        return '超时';
      }

      function w() {
        setTimeout(w(), 4000);
      }

      function a() {
        return '11111';
      }

      const response = yield call(gethongjian);

      console.log(response, 32213321);
    },
    * fetchDa(payload, { call, put }) {

    },
  },
  reducers: {
    saveData(state, { payload }) {
      return {
        ...state,
        payload,
      };
    },
  },
};
