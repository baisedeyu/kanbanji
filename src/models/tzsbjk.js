import { TZSBJK_getDatas } from '../services/api';


export default {
  namespace: 'tzsbjk',
  state: {
    data: [],
    data2: [],
  },
  effects: {
    * getData(_, { call, put }) {
      const response = yield call(TZSBJK_getDatas);
      if (response.IsSuccess) {
        yield put({
          type: 'saveData',
          data: response.data.lstDeviceEkanInfo,
          data2: response.data.lstDeviceState,
        });
      }
    },
  },
  reducers: {
    saveData(state, { data, data2 }) {
      return {
        ...state,
        data,
        data2,
      };
    },
  },
};
