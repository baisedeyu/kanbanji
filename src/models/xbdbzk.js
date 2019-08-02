import { getSCZK_DATA } from '../services/api';

export default {
  namespace: 'xbdbzk',
  state: {
    data: [],
    xiabiao: [],
    value: [],
  },
  effects: {
    * fetchData({ doechart }, { call, put }) {
      const response = yield call(getSCZK_DATA);
      if (response.IsSuccess) {
        const xiabiao = [];
        const value = [];
        let sum = 0;
        response.data.map((item, index) => {
          xiabiao.push(item['DEVICESCODE']);
          if (item[`UTILIZATIONRATE`] === -1) {
            value.push(0);
          } else {
            sum += item[`UTILIZATIONRATE`];
            value.push(item['UTILIZATIONRATE']);
          }
        });

        yield put({
          type: 'saveData',
          data: response.data, xiabiao, value,
        });
        doechart({ xiabiao, value, sum });
      }
    },
  },
  reducers: {
    saveData(state, { data, xiabiao, value }) {
      return {
        ...state,
        data, xiabiao, value,
      };
    },
  },
};
