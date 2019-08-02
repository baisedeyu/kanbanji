import {RCLSC_getDatas} from '../services/api'

export default {
  namespace:'rechulilu',
  state:{
    tableData:[]
  },
  effects:{
    *fetchData(payload,{call,put}){
      const response=yield call(RCLSC_getDatas)
      console.log(response)
      if (response.IsSuccess) {
        yield put({
          type:'saveData',
          payload:response.data
        })
      }
    },
  },
  reducers:{
    saveData(state,payload){
      return{
        ...state,
        tableData:payload.payload
      }
    },
  }
}


