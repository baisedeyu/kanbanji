import { getXrayData } from '../services/api';


const pageSize = 8;
export default {
  namespace: 'xray',

  state: {
    data: [],
    data2: [],
    tableData1: {},
    tableData2: {},
    tableData3: {},
    tableData4: {},
    totalPage1: 1,
    totalPage2: 1,
    totalPage3: 1,
    totalPage4: 1,
    CurPage1: 1,
    CurPage2: 1,
    CurPage3: 1,
    CurPage4: 1,
  },

  effects: {
    * fetchData(_, { select, call, put }) {
      const response = yield call(getXrayData);
      if (response.IsSuccess) {
        const page = yield select(state => state.xray);
        let tableData1;
        let tableData2;
        let tableData3;
        let tableData4;
        if (page[`totalPage3`] === page[`CurPage3`]) {
          tableData3 = response.data[`oRescodeXray`][2];
          let totalPage3;
          if (tableData3[`lstDeviceXray`].length===0){
            totalPage3=1
          } else {
            totalPage3 = Math.ceil(tableData3[`lstDeviceXray`].length / pageSize);
          }
          const CurPage3 = 1;
          yield put({
            type: 'savetable1Data3',
            totalPage3,
            CurPage3,
            tableData3,
          });
        } else {
          const CurPage3 = page[`CurPage3`] + 1;
          yield put({
            type: 'saveCurrentPage3',
            CurPage3,
          });
        }
        if (page[`totalPage1`] === page[`CurPage1`]) {
          tableData1 = response.data[`oRescodeXray`][0];
          let totalPage1;
          if (tableData1[`lstDeviceXray`].length===0){
            totalPage1=1
          } else {
            totalPage1 = Math.ceil(tableData1[`lstDeviceXray`].length / pageSize);
          }
          const CurPage1 = 1;
          yield put({
            type: 'savetable1Data1',
            totalPage1,
            CurPage1,
            tableData1,
          });
        } else {
          const CurPage1 = page[`CurPage1`] + 1;
          yield put({
            type: 'saveCurrentPage1',
            CurPage1,
          });
        }

        if (page[`totalPage2`] === page[`CurPage2`]) {
          tableData2 = response.data[`oRescodeXray`][1];
          let totalPage2;
          if (tableData2[`lstDeviceXray`].length===0){
            totalPage2=1
          } else {
            totalPage2 = Math.ceil(tableData2[`lstDeviceXray`].length / pageSize);
          }
          const CurPage2 = 1;
          yield put({
            type: 'savetable1Data2',
            totalPage2,
            CurPage2,
            tableData2,
          });
        } else {
          const CurPage2 = page[`CurPage2`] + 1;
          yield put({
            type: 'saveCurrentPage2',
            CurPage2,
          });
        }

        if (page[`totalPage4`] === page[`CurPage4`]) {
          tableData4 = response.data[`oRescodeXray`][3];
          let totalPage4;
          if (tableData4[`lstDeviceXray`].length===0){
            totalPage4=1
          } else {
            totalPage4 = Math.ceil(tableData4[`lstDeviceXray`].length / pageSize);
          }
          const CurPage4 = 1;
          yield put({
            type: 'savetable1Data4',
            totalPage4,
            CurPage4,
            tableData4,
          });
        } else {
          const CurPage4 = page[`CurPage4`] + 1;
          yield put({
            type: 'saveCurrentPage4',
            CurPage4,
          });
        }

        yield put({
          type: 'save',
          payload: response.data,
        });
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      const data = payload.oFu_wm_production_temp === null ? [] : payload.oFu_wm_production_temp;
      return {
        ...state,
        data: payload.oRescodeXray,
        data2: data,
      };
    },
    savetable1Data3(state, { totalPage3, CurPage3, tableData3 }) {
      return {
        ...state,
        totalPage3,
        CurPage3,
        tableData3,
      };
    },
    saveCurrentPage3(state, { CurPage3 }) {
      return {
        ...state,
        CurPage3,
      };
    },
    savetable1Data1(state, { totalPage1, CurPage1, tableData1 }) {
      return {
        ...state,
        totalPage1,
        CurPage1,
        tableData1,
      };
    },
    saveCurrentPage1(state, { CurPage1 }) {
      return {
        ...state,
        CurPage1,
      };
    },
    savetable1Data2(state, { totalPage2, CurPage2, tableData2 }) {
      return {
        ...state,
        totalPage2,
        CurPage2,
        tableData2,
      };
    },
    saveCurrentPage2(state, { CurPage2 }) {
      return {
        ...state,
        CurPage2,
      };
    },

    savetable1Data4(state, { totalPage4, CurPage4, tableData4 }) {
      return {
        ...state,
        totalPage4,
        CurPage4,
        tableData4,
      };
    },
    saveCurrentPage4(state, { CurPage4 }) {
      return {
        ...state,
        CurPage4,
      };
    },
  },
};
