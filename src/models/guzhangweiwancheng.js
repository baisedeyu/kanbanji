import { getgzwwckb } from '../services/shebeiguanli';

export default {
  namespace: 'guzhangweiwancheng',
  state: {
    data: [],
    TotalCount: 0,
  },

  effects: {
    * fetchData({ payload }, { select, call, put }) {
      const response = yield call(getgzwwckb, payload);
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
