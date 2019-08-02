import request from '../utils/request';
import request1 from '../utils/request1';



export async function getDoubleTableData() {
  return request('/api/doubleTableData');
}

export async function getPingHengHaiLouTable() {
  return request('/api/pingHengHaiLouTable');
}



export async function touLiao() {
  console.log(window.document.location.href)
  return request1('http://192.168.99.34/EKanService/EKanService.svc/getTblonwipitem?orgid=118&DISPLAYPOINTCODE=YND01009',{
    mode:'cors',
    header:{'content-type':'application/json'},
    method:'GET',
    credentials:'include',
    Origin: '*',
  });
}
