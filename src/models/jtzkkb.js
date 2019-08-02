import { JTZKKB_GETDATA } from '../services/api';

export default {
  namespace: 'jtzkkb',
  state: {
    data: [],
    title: '粗车生产状况 -- 粗车区',
  },
  effects: {
    * fetchData({}, { call, put }) {
      const response = yield call(JTZKKB_GETDATA);
      if (response.IsSuccess) {
        yield put({
          type: 'saveData',
          payload: response.data,
        });
      }
    },
  },
  reducers: {
    saveData(state, { payload }) {
      return {
        ...state,
        data: payload['WMPRODUCTION'],
        title: payload['TITLE'],
      };
    },
  },
};
