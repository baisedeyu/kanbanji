import { getbyzxwwc } from '../services/shebeiguanli';

export default {
  namespace: 'baoyangzhixingweiwancheng',
  state: {
    data: [],
    PageSize: 1,
    TotalCount: 0,
  },
  effects: {
    * fetchData({ payload }, { select, call, put }) {
      const response = yield call(getbyzxwwc, payload);
      if (response.IsSuccess) {
        yield put({
          type: 'saveData',
          data: response.data,
          TotalCount: response.TotalCount,
        });
      }
    },
  },
  reducers: {
    saveData(state, { data, TotalCount }) {
      return {
        ...state,
        data, TotalCount,
      };
    },
  },

};
