import { getAlertDevice, getAlertImg, getAlertImg2 } from '../services/api';


export default {
  namespace: 'bjjt',
  state: {
    data: [],
    ImgData: [],
    ImgData2: [],
  },
  effects: {
    * getData({ _ }, { call, put }) {
      const response = yield call(getAlertDevice);
      if (response.IsSuccess) {
        yield put({
          type: 'saveData',
          data: response.data,
        });
      } else {
        yield put({
          type: 'saveData',
          data: [],
        });
      }
    },
    // 获取图片
    * getImg({ ID }, { call, put }) {
      const response = yield call(getAlertImg, ID);
      if (response.IsSuccess) {
        yield put({
          type: `saveImg`,
          ImgData: response.data,
        });
      } else {
        yield put({
          type: `saveImg`,
          ImgData: [],
        });
      }
    },
    // 获取图片2
    * getImg2({ params }, { call, put }) {
      const response = yield call(getAlertImg2, params);
      if (response.IsSuccess) {
        yield put({
          type: `saveImg2`,
          ImgData2: response.data,
        });
      } else {
        yield put({
          type: `saveImg2`,
          ImgData2: [],
        });
      }
    },
  },


  reducers: {
    saveData(state, { data }) {
      return {
        ...state,
        data,
      };
    },
    saveImg(state, { ImgData }) {
      return {
        ...state,
        ImgData,
      };
    },
    saveImg2(state, { ImgData2 }) {
      return {
        ...state,
        ImgData2,
      };
    },
  },
};
