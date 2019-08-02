import { getSCZK_DATA } from '../services/api';

export default {
  namespace: 'jgsczk',
  state: {
    data: [],
    tableData: [],
  },
  effects: {
    * fetchData(_, { call, put }) {
      const response = yield call(getSCZK_DATA);
      if (response.IsSuccess) {
        const dd = [...response.data];
        // const biaoti = ['作业员', '检查员', `当班标量`, `型式`, '当班产出', `累计达成`, '差异', '品质异常', '设备故障', '计划停机', '缺料指示', '累计时间', 'OEE', '运行状态'];
        const biaoti = ['作业员', '检查员', `当班标量`,  '当班产出', `累计达成`, '差异', '品质异常', '设备故障', '计划停机', '缺料指示', '累计时间', '稼动率', '运行状态'];
        const tableData = [];
        biaoti.map((item, index) => {
          tableData.push({
            title: item,
            key: `${index}key`,
          });
        });
        console.log(tableData);
        dd.map((items, indexs) => {
          //作业员
          tableData[0][`${items[`DEVICESCODE`]}`] = items[`OPUSER`];
          //检查员
          tableData[1][`${items[`DEVICESCODE`]}`] = items[`CHECKUSER`];
          //当班标量
          tableData[2][`${items[`DEVICESCODE`]}`] = items[`SHIFTPOUT`]
          //型式
          // tableData[3][`${items[`DEVICESCODE`]}`] = items[`MODELNAME`];
          //当班产出
          tableData[3][`${items[`DEVICESCODE`]}`] = items[`SHIFTOUT`];
          //累计达成
          tableData[4][`${items[`DEVICESCODE`]}`] = `${items[`ACHIEVINGRATE`]}%`;
          //差异
          tableData[5][`${items[`DEVICESCODE`]}`] = items[`DIFFERENCE`];
          //品质异常
          tableData[6][`${items[`DEVICESCODE`]}`] = items[`QSTATE`];
          //设备故障
          tableData[7][`${items[`DEVICESCODE`]}`] = items[`FLOSTTIME`];
          //计划停机
          tableData[8][`${items[`DEVICESCODE`]}`] = items[`QLOSSTIME`];

          //缺料指示
          tableData[9][`${items[`DEVICESCODE`]}`] = items[`LMGLOSTTIME`];
          //累计时间
          tableData[10][`${items[`DEVICESCODE`]}`] = items[`LOSTTIME`];
          //OEE
          tableData[11][`${items[`DEVICESCODE`]}`] = items[`UTILIZATIONRATE`];
          //运行状态 1红色 2绿色
          tableData[12][`${items[`DEVICESCODE`]}`] = items[`RUNSTATE`];
        });
        yield put({
          type: 'saveData',
          data: response.data,
          tableData,
        });
      }
    },
  },
  reducers: {
    saveData(state, { data, tableData }) {
      return {
        ...state,
        data, tableData,
      };
    },
  },
};
