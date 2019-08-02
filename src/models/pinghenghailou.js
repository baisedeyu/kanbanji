import { getPinghenghailouData } from '../services/api';


export default {

  namespace: 'pinghenghailou',

  state: {
    data: [],
    data2: [],
    title: '平衡氦漏',
  },

  effects: {
    * fetchData(_, { call, put }) {
      const response = yield call(getPinghenghailouData);

      if (response.data.IsSuccess) {
        yield put({
          type: 'save',
          payload: response.data.data,
        });
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        data: payload.oFUCT,
        data2: payload.oFu_wm_production_temp,
        title: payload.TITLE,
      };
    },
  },
};
