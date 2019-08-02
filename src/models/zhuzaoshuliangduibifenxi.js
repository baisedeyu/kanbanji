import {getZZSLFXDB} from '../services/api'



export default {
  namespace:'zhuzaoshuliangduibifenxi',
  state:{
    tableData:[],
    tubiaoshuju:{}
  },
  effects:{
    *fetchData({},{call,put}){
      const response=yield call(getZZSLFXDB)
      if (response.IsSuccess){
        const dd=[{},{},{}]
        const cc={}
        if (response.data.length>1){
          Object.keys(response.data[0]).map(item=>{
            cc[item]=[]
          })
        }
        response.data.map((item,index)=>{
          cc['DEVICENAME'].push(item['DEVICENAME'])
          cc['ACTOUTPUT'].push(parseInt(item['ACTOUTPUT']))
          cc['XRAYOUT'].push(item['XRAYOUT'])
          cc['XRAYOKRATE'].push(item['XRAYOKRATE'])
        })
        console.log(cc)
        cc['DEVICENAME'].map((item,index)=>{
          dd[0][item]=cc['ACTOUTPUT'][index]
          dd[1][item]=cc['XRAYOUT'][index]
          dd[2][item]=cc['XRAYOKRATE'][index]
        })
        dd[0]['gongxu']='铸造个数'
        dd[1]['gongxu']='Xray光良品数'
        dd[2]['gongxu']='不良率'

        yield put({
          type:'saveData',
          tableData:dd,
          tubiaoshuju:cc,
        })
      }

    },
  },
  reducers:{
    saveData(state,{tableData,tubiaoshuju}){
      return{
        ...state,
        tableData,tubiaoshuju
      }
    },
  }
}
