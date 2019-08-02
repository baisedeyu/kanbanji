import { TZTZ_getDatas } from '../services/api';

export default {
  namespace: `tztz`,
  state: {
    table: [],
  },
  effects: {
    * getData({ _ }, { call, put }) {
      const response = yield call(TZTZ_getDatas);
      if (response.IsSuccess) {
        const data = [...response.data];
        let table = [];
        if (data.length > 10) {
          table = data.slice(0, 10);
          const data2 = data.slice(10 - data.length);
          data2.map((item, index) => {
            // todo 超过20个 未处理
            if (index < 10) {
              table[index][`MODEL2`] = item[`MODEL`];
              table[index][`SHIFTAMOUNT2`] = item[`SHIFTAMOUNT`];
              table[index][`SHIFTIN2`] = item[`SHIFTIN`];
              table[index][`FINISHRATE2`] = item[`FINISHRATE`];
            }
          });
          table.map((item, index) => item[`key`] = `${index}tztz`);
        } else {
          table = data;
          const count=table.length
          for (let x=0;x<10-count;x++){
            table.push({})
          }
        }
        yield put({
          type: 'tztz_saveTable',
          table,
        });
      }
    },
  },
  reducers: {
    tztz_saveTable(state, { table }) {
      return {
        ...state,
        table,
      };
    },
  },
};
