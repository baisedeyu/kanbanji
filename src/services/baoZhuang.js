import request from '../utils/request';
import request1 from '../utils/request1';

export  async function getBaoZhuang() {

  return request('/api/baoZhuang')

}
