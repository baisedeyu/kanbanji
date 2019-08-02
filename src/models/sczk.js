import { getSCZK_DATA } from '../services/api';

export default {
  namespace: 'sczk',
  state: {
    data: [],
    tableData: [],
  },
  effects: {
    * fetchData(_, { call, put }) {
      const response = yield call(getSCZK_DATA);
      if (response.IsSuccess) {
        const dd = [...response.data];
        const data = [];
        const biaoti = ['标量', '投料数', '重工数', '累计达成', '品质异常', '设备故障', '计划停机', '缺料指示', '累计时间', '运行状态'];
        biaoti.map((item, index) => {
          data.push({
            title: item,
          });
        });
        dd.map((item, index) => {
          //标量
          data[0][`${item[`DEVICESCODE`]}`] = item[`SHIFTOUT`];
          //投料数
          data[1][`${item[`DEVICESCODE`]}`] = item[`SHIFTOUT`];
          //重工数
          data[2][`${item[`DEVICESCODE`]}`] = item[`REWORK`];
          // 累计达成
          data[3][`${item[`DEVICESCODE`]}`] = item[`ACHIEVINGRATE`];
          // 进度
          // data[4][`${item[`DEVICESCODE`]}`] = item[`ACHIEVINGRATE`];
          // 品质异常
          data[4][`${item[`DEVICESCODE`]}`] = item[`QSTATE`];
          // 设备故障
          data[5][`${item[`DEVICESCODE`]}`] = item[`FLOSTTIME`];
          // 计划停机
          data[6][`${item[`DEVICESCODE`]}`] = item[`QLOSSTIME`];
          // 缺料指示
          data[7][`${item[`DEVICESCODE`]}`] = item[`LMGLOSTTIME`];
          // 累计时间
          data[8][`${item[`DEVICESCODE`]}`] = item[`LOSTTIME`];
          //运行状态
          data[9][`${item[`DEVICESCODE`]}`] = item[`RUNSTATE`];
        });
        yield put({
          type: 'saveData',
          data: response.data,
          tableData: data,
        });
      }
    },
  },
  reducers: {
    saveData(state, { data, tableData }) {
      return {
        ...state, data, tableData,
      };
    },
  },
};
