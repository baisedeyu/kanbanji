import { CQJL_getDatas,CQJL_getDatas2 } from '../services/api';

export default {

  namespace :'chuqijinglian',

  state:{
    lvtang:[],
    zhishi:[],
    CHECKER:'',
    PHONENO:'',
    SHIFTDESC:'',
  },

  effects: {
    *fetchData(_, {call, put}) {
      const response = yield call(CQJL_getDatas);
      if (response.IsSuccess){
        yield put({
          type:'show',
          payload:response.data
        })
      }
    },

  },
  reducers: {
    show(state, payload) {
      const data=payload.payload
      return {
        ...state,
        lvtang:data.lstFUAIWATERANALYSEINFO,
        zhishi:data.lstJLItemInfo,
        CHECKER:data.CHECKER,
        PHONENO:data.PHONENO,
        SHIFTDESC:data.SHIFTDESC
      };
    },
  }
}
