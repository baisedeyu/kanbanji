import { stringify } from 'qs';
import requestx from '../utils/requestx';


// 定模定线看板
export async function getDMDXKB(params) {
  return requestx(`http://192.168.99.43/LFWcfService/FOnwipRes.svc/GetMouldDMDXInfo?OrgId=118`);
  // return requestx(`http://221.233.243.220/MESService/FOnwipRes.svc/GetMouldDMDXInfo?OrgId=168`);
}

//备模中模具状况一览表
export async function getBMZMJZKYLB() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const myurl = data.EKANServer;
  const ORGID = data.OrgID;
  // return requestx(`http://192.168.99.43/LFWcfService/FOnwipRes.svc/GetBMCondition?OrgId=118`)
  return requestx(`${myurl}/GetBMCondition?OrgId=${ORGID}`)
}
