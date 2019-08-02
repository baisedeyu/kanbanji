import { CCX_GETDATA } from '../services/api';

export default {
  namespace: 'cuchexian',
  state: {
    OUTPUT: [],
    WMPRODUCTION: [],
    title: '自动化加工 单元',
  },
  effects: {
    * fetchData({}, { call, put }) {
      const response = yield call(CCX_GETDATA);
      if (response.IsSuccess) {
        yield put({
          type: 'show',
          payload: response.data,
        });
      }
    },
  },
  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        OUTPUT: payload.OUTPUT,
        WMPRODUCTION: payload.WMPRODUCTION,
        title: payload['TITLE'],
      };
    },
  },
};
