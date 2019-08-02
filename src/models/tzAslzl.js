import Setting from '../routes/Setting/Setting';

const dat1 = [
  {
    bxc: 'A12',
    xs: 'Q51',
    zxpc: '240',
    dslots: '7',
    dssl: '150',
  }, {
    bxc: 'A12',
    xs: 'Q52',
    zxpc: '240',
    dslots: '7',
    dssl: '150',
  }, {
    bxc: 'A12',
    xs: 'Q53',
    zxpc: '240',
    dslots: '7',
    dssl: '150',
  }, {
    bxc: 'A12',
    xs: 'Q54',
    zxpc: '240',
    dslots: '7',
    dssl: '150',
  }, {
    bxc: 'A12',
    xs: 'Q55',
    zxpc: '240',
    dslots: '7',
    dssl: '150',
  }, {
    bxc: 'A12',
    xs: 'Q56',
    zxpc: '240',
    dslots: '7',
    dssl: '150',
  }, {
    bxc: 'A12',
    xs: 'Q57',
    zxpc: '240',
    dslots: '7',
    dssl: '150',
  }, {
    bxc: 'A12',
    xs: 'Q58',
    zxpc: '240',
    dslots: '7',
    dssl: '150',
  }, {
    bxc: 'A12',
    xs: 'Q59',
    zxpc: '240',
    dslots: '7',
    dssl: '150',
  },
];

const dat2 = [
  {
    value1: '正上型式',
    value2: 'Q51',
  }, {
    value1: '当前批号',
    value2: 'Q05-18092301',
  }, {
    value1: '待上数量',
    value2: '150',
  }, {
    value1: '已上数量',
    value2: '250',
  }, {
    value1: '等待上料',
    value2: 'Q52',
  },
];

const dat3 = [
  {
    gw: '',
    czy: '',
    dbbl: '',
    trs: '',
    wcbl: '',
    jd: '',
    sczk: '',
    jhtj: '',
    yctj: '',
    ljsj: '',
    OEE: '',
  },
];

import { TZSLA_getDatas } from '../services/api';

export default {
  namespace: 'tzAslzl',

  state: {
    data1: [],
    data2: [],
    data3: [],
  },

  effects: {
    * getData(payload, { call, put }) {
      const response = yield call(TZSLA_getDatas);
      if (response.IsSuccess) {
        const data2 = [];
        const dsl = [];
        let ddsl = ``;
        const data1 = response.data.lstTZSL;
        data1.map((item, index) => {
          item.key = `${index}t1`;
          if (item[`BATCHNUM`] < item[`WAITNUM`]) {
            dsl.push(item[`MODEL`]);
          }
        });
        const dsls = new Set(dsl);
        const ddd = [...dsls];
        const dd = response.data.tz;
        const index = ddd.indexOf(dd[`MODEL`]);
        if (index !== -1) {
          ddd.splice(index, 1);
        }
        ddd.map((item, index) => {
          if (index === ddd.length - 1) {
            ddsl = `${ddsl}${item}`;
          } else {
            ddsl = `${ddsl}${item},`;
          }
        });
        data2.push({
          value1: '正上型式',
          value2: dd[`MODEL`],
        }, {
          value1: '当前批号',
          value2: dd[`BATCHNO`],
        }, {
          value1: '待上数量',
          value2: dd[`WAITNUM`],
        }, {
          value1: '已上数量',
          value2: dd[`WAITEDNUM`],
        }, {
          value1: '等待上料',
          value2: ddsl,
        });
        yield put({
          type: 'saveDatas',
          data1, data2,
        });
      }

    },
  },

  reducers: {
    saveDatas(state, { data1, data2 }) {
      return {
        ...state,
        data1,
        data2: [...data2],
        data3: dat3,
      };
    },
  },
};
