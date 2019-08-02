import { getc24xswwc } from '../services/shebeiguanli';

const mydata = [
  {
    bumen: 'WF1',
    shebeijianma: '1#',
    shebeidengji: 'B',
    shebeimingcheng: 'L/P铸造机',
    baoxiushijian: '07-16 16:23',
    weixiuzhuangtai: '维修中',
    zhixingren: '张三',
    yibaoxiushishu: '44',
  },
  {
    bumen: 'WF2',
    shebeijianma: '7#',
    shebeidengji: 'A',
    shebeimingcheng: '熔解炉',
    baoxiushijian: '07-15 10:23',
    weixiuzhuangtai: '停机待修',
    zhixingren: '李四',
    yibaoxiushishu: '74',
  },
];

export default {
  namespace: 'chao24xiaoshiweiwancheng',
  state: {
    data: [],
    huizong: [],
  },
  effects: {
    * fetchData({ payload }, { select, call, put }) {
      const response = yield call(getc24xswwc, payload);
      let huizong = [];
      if (response.IsSuccess) {
        if (response.data.length > 0) {
          huizong = response.data.pop();
        }
        yield put({
          type: 'save',
          payload: response.data,
          huizong,
        });
      }
    },
  },
  reducers: {
    save(state, { payload, huizong }) {
      return {
        ...state,
        data: payload,
        huizong,
      };
    },
  },
};
