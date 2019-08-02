import { getBanBie } from '../services/api';

export default {
  namespace: 'banbie',
  state: {
    banbie: '',
  },
  effects: {
    * fetchData(_, { call, put }) {
      const response = yield call(getBanBie);
      if (response.IsSuccess) {
        yield put({
          type: 'saveDatas',
          payload: response.data,
        });
      }
    },
    * fetchData1({ changeTime }, { call, put }) {
      const response = yield call(getBanBie);
      if (response.IsSuccess) {
        yield put({
          type: 'saveDatas',
          payload: response.data,
        });
        changeTime(response[`CurDateTime`]);
      }
    },
  },
  reducers: {
    saveDatas(state, { payload }) {
      return {
        ...state,
        banbie: payload,
      };
    },
  },
};
