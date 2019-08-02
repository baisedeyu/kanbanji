import { message } from 'antd';
import {chaXunKuCun} from '../services/KuCunService'

export default {
  namespace: 'KuCunModel',
  state: {},
  effects: {
    //查看库存
    *chaXunKuCun({payload,callback},{put,call}){
      console.log(payload,9);
      const response = yield call(chaXunKuCun,payload);
      callback(response.data,response.Msg);
    }
  },
  reducers: {},
};
