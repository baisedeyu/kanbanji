import { KCMX_getDatas } from '../services/api';

export default {
  namespace: 'kucunmingxi',
  state: {
    tableData: [],
    totalPage: 1,
    currentPage: 0,
    nowUser: [],
  },
  effects: {
    * getData(payload, { call, put }) {
      const response = yield call(KCMX_getDatas);
      if (response.IsSuccess) {
        const totalPage = response.data.length % 15 === 0 ? Math.ceil(response.data.length / 15) + 1 : Math.ceil(response.data.length / 15);
        let nowUser = [];
        response.data.map(item => {
          nowUser.push(item[`BATCHNO`]);
        });
        nowUser.sort();
        yield put({
          type: 'saveData',
          payload: response.data,
          totalPage,
          nowUser,
        });
      }
    },
    * upData(payload, { select, call, put }) {
      let currentPage = yield select(state => state.kucunmingxi.currentPage);
      currentPage += 1;
      yield put({
        type: 'saceUpData',
        currentPage,
      });
    },
  },
  reducers: {
    saveData(state, { payload, totalPage, nowUser }) {
      return {
        ...state,
        tableData: payload,
        totalPage,
        nowUser,
      };
    },
    clearCurrentPage(state, { payload }) {
      return {
        ...state,
        currentPage: 0,
      };
    },
    saceUpData(state, { currentPage }) {
      return {
        ...state,
        currentPage,
      };
    },
  },
};
