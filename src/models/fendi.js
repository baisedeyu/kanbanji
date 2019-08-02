import { getDQFK_Data, getDQFK_Data2,getBZOutputData } from '../services/api';
import { Promise } from 'core-js';


const delay=(ms)=>new Promise(resolve=>setTimeout(resolve,ms))

export default {
  namespace: 'fendi',
  state: {
    data1: [],
    data2: [],
    title: '',
  },
  effects: {
    * fetchData(_, { call, put }) {
      const response = yield call(getDQFK_Data);
      if (response.IsSuccess) {
        yield put({
          type: 'saveData',
          data1: response.data,
          title: response.data[0][`DISPLAYCODE`],
        });
      }
      const response1 = yield call(getDQFK_Data2);
      if (response1.IsSuccess) {
        yield put({
          type: 'saveData2',
          data2: response1.data,
        });
      }
    },
    *fetchData2(_,{call,put,race}){
      const response=yield call(getBZOutputData)
      if(response.IsSuccess){
        yield put({
          type: 'saveData',
          data1: response.data,
          title: response.data[0][`DISPLAYCODE`],
        });
      }
      // const {response,timeout}=yield race({
      //   response:call(getBZOutputData),
      //   timeout:call(delay,10000)
      // })
      // console.log(response)
      // if(response){
      //   console.log(`you`)
      // }else{
      //   console.log('man')
      // }
    }
  },
  reducers: {
    saveData(state, { data1, title }) {
      return {
        ...state,
        data1, title,
      };
    },
    saveData2(state, { data2 }) {
      return {
        ...state,
        data2,
      };
    },
  },
};
