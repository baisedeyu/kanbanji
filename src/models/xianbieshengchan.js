import { getSCZKKB } from '../services/api';


export default {

  namespace: 'xianbieshengchan',

  state: {
    data: [],
  },

  effects: {
    * fetchData({}, { call, put }) {
      const response1 = yield call(getSCZKKB);
      if (response1.IsSuccess) {
        const data = [];
        response1.data.map((item, index) => {
          data.push({
            xianbie: item.DEVICESCODE,
            dangbianbiaoliang: item.SHIFTPOUT,
            shengchanxingshi: item.MODEL,
            dangbianchanchu: item.SHIFTINPUT,
            dachenglv: item.ACHIEVINGRATE,
            chayi: item.DIFFERENCE,
            pinzhichayi: item.QSTATE,
            shebeiguzhang: item.FSTATE,
            jihuatingji: item.PSTATE,
            leijishijian: item.LOSTTIME,
            UTILIZATIONRATE: item.UTILIZATIONRATE,
          });
        });
        yield put({
          type: 'save',
          payload: data,
        });
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        data: payload,
      };
    },
  },
};
