import { TLKB_getDatas,TLKB_getDatas1 } from '../services/api';

export default {

  namespace :'rongjietouliao',

  state:{
    touliao:[],
    jianshi:[],
  },

  effects: {
    *fetchData(_, {call, put}) {
      const response = yield call(TLKB_getDatas);
      if (response.IsSuccess){
        yield put({
          type:'show',
          lstRlItemInfo:response.data.lstRlItemInfo,
          lstRJControl:response.data.lstRJControl
        })
      }
    },


  },
  reducers: {
    show(state, payload) {
      return {
        ...state,
        touliao:payload.lstRlItemInfo,
        jianshi:payload.lstRJControl
      };
    },
  }
}
