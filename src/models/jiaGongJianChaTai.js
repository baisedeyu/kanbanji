import { getJiaGongJianChaTai } from '../services/jiaGongJianChaTai';

export  default {

  namespace:'jiaGongJianChaTai',
  state:{
    data:[]
  },

  effects:{
    *fetch(_, {call, put}) {
      const response = yield call(getJiaGongJianChaTai);
      const data1 = response.jiaGongJianChaTai
      console.log(data1)
      yield put({
        type: 'save',
        payload: data1,
      });
    },
  },

  reducers:{
    save(state,{payload}){
      return { state,
        data:payload };
    }
  }

}
