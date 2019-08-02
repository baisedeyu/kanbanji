import { getDMDXKB, getBMZMJZKYLB } from '../services/mujukanban';

export default {
  namespace: 'muju',
  state: {
    data: [],
    totalPage: 0,
    page: 1,

    BMData: [],
    BMTotalPage: 0,
    BMpage: 1,
    BMTotal: 0,
  },
  effects: {
    * getData({ payload }, { call, put }) {
      const response = JSON.parse(yield call(getDMDXKB));
      if (response.IsSuccess) {
        const data = JSON.parse(response.Data);
        data.map((item, index) => {
          item[`key`] = `${index}keys`;
        });
        yield put({
          type: 'saveData',
          data: data,
          totalPage: Math.ceil(data.length / configs201905131052.DMDX_count),
          page: 1,
        });
      }
    },
    * getBMData({ _ }, { call, put }) {
      const response = JSON.parse(yield call(getBMZMJZKYLB));
      if (response.IsSuccess) {
        const data = JSON.parse(response.Data)[`lstCon`];
        data.map((item, index) => {
          item[`key`] = `${index}keys`;
        });
        const BMTotal = JSON.parse(response.Data)[`BMTotal`];
        yield put({
          type: 'saveBMData',
          BMData: data,
          // BMTotalPage: Math.ceil(data.length / configs201905131052.BM_count),
          BMTotalPage: Math.ceil(data.length / 6),
          BMpage: 1,
          BMTotal,
        });
      }
    },
  },
  reducers: {
    saveBMData(state, { BMData, BMTotalPage, BMpage, BMTotal }) {
      return {
        ...state,
        BMData, BMTotalPage, BMpage, BMTotal,
      };
    },
    saveData(state, { data, totalPage, page }) {
      return {
        ...state,
        data, totalPage, page,
      };
    },
    upDMDX_Page(state, { page }) {
      return {
        ...state,
        page,
      };
    },
    upBM_Page(state, { BMpage }) {
      return {
        ...state,
        BMpage,
      };
    },
  },
};
