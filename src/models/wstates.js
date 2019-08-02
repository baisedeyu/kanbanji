import {queryStalets} from "../services/api"

export default {
namespace:'wstates',
  state:{
    mydata:[],
  },

  effects:{
  *fetchBasic(_,{call,put}){
      const response=yield call(queryStalets)
      const xdata=response.data;
      yield put({
        type:'show',
        payload:xdata,
      })
    },
  },
  reducers:{
     show(state,{payload})
     {
       return{
         ...state,
         mydata:payload,
       }
     },
  },
}
