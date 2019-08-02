import { stringify } from 'qs';
import requestx from '../utils/requestx';


// 六丰设备部管理看板—点检执行汇总看板
export async function getsbzxhz(param) {
  const {  params } = param;
  const { OrgID, DSPOINTCODE } = params;
  return requestx(`${SB_IP}/DianjianKanBanPool?Point=${DSPOINTCODE}&ORGID=${OrgID}&inclusive=0&exclusive=99999`);
  // return requestx(`http://192.168.99.143/LFService/FUEMSService.svc/DianjianKanBanPool?Point=Point1&ORGID=118&inclusive=0&exclusive=10`);
  // http://localhost:8000/zsbkb?Point=DEVICE&OrgID=118&EKANServer=http://192.168.99.143/LFService/FUEMSService.svc
}

// 六丰设备部管理看板—点检执行未完成看板
export async function getsbzxwwc(param) {
  const {  params } = param;
  const { OrgID, DSPOINTCODE } = params;
  return requestx(`${SB_IP}/DianjianKanBanNoComplete?Point=${DSPOINTCODE}&ORGID=${OrgID}&inclusive=0&exclusive=99999`);
  // return requestx(`http://192.168.99.143/LFService/FUEMSService.svc/DianjianKanBanNoComplete?Point=Point1&ORGID=118&inclusive=0&exclusive=10`);
  // http://localhost:8000/zsbkb?Point=DEVICE&OrgID=118&EKANServer=http://192.168.99.143/LFService/FUEMSService.svc
}

// 六丰设备部管理看板—保养执行汇总看板
export async function getbyzxhz(param) {
  const { params } = param;
  const { OrgID, DSPOINTCODE } = params;
  return requestx(`${SB_IP}/BaoyangKanBanPool?Point=${DSPOINTCODE}&ORGID=${OrgID}&inclusive=0&exclusive=99999`);
  // return requestx(`http://192.168.99.143/LFService/FUEMSService.svc/BaoyangKanBanPool?Point=Point1&ORGID=118&inclusive=0&exclusive=10`);
  //http://localhost:8000/zsbkb?Point=DEVICE&OrgID=118&EKANServer=http://192.168.99.143/LFService/FUEMSService.svc
}

// 六丰设备部管理看板—保养执行未完成看板
export async function getbyzxwwc(param) {
  const { params } = param;
  const { OrgID, DSPOINTCODE } = params;
  return requestx(`${SB_IP}/BaoyangKanBanNoComplete?Point=${DSPOINTCODE}&ORGID=${OrgID}&inclusive=0&exclusive=99999`);
  // return requestx(`http://192.168.99.143/LFService/FUEMSService.svc/BaoyangKanBanNoComplete?Point=Point1&ORGID=118&inclusive=0&exclusive=10`);
  // http://localhost:8000/zsbkb?Point=DEVICE&OrgID=118&EKANServer=http://192.168.99.143/LFService/FUEMSService.svc
}

// 六丰设备管理看板—故障未完成看板
export async function getgzwwckb(param) {
  const { params } = param;
  const { OrgID, DSPOINTCODE } = params;
  return requestx(`${SB_IP}/WeixiuKanBanNoComplete?Point=${DSPOINTCODE}&ORGID=${OrgID}&inclusive=0&exclusive=99999`);
  // return requestx(`http://192.168.99.143/LFService/FUEMSService.svc/WeixiuKanBanNoComplete?Point=Point1&ORGID=118&inclusive=0&exclusive=10`);
  //http://localhost:8000/zsbkb?Point=DEVICE&OrgID=118&EKANServer=http://192.168.99.143/LFService/FUEMSService.svc
}

// 六丰设备部管理看板—24小时故障维修汇总看板
export async function getc24xswwc(param) {
  const { params } = param;
  const { OrgID, DSPOINTCODE } = params;
  return requestx(`${SB_IP}/WeixiuKanBanPool?Point=${DSPOINTCODE}&ORGID=${OrgID}&inclusive=0&exclusive=99999`);
  // return requestx(`http://192.168.99.143/LFService/FUEMSService.svc/WeixiuKanBanPool?Point=Point1&ORGID=118&inclusive=0&exclusive=10`);
  //http://localhost:8000/zsbkb?Point=DEVICE&OrgID=118&EKANServer=http://192.168.99.143/LFService/FUEMSService.svc
}

// 六丰看板滚动总接口
export async function getUrl(param) {
  const { OrgID, DSPOINTCODE } = param;
  return requestx(`${SB_IP}/GetMsgByPoint?Point=${DSPOINTCODE}&ORGID=${OrgID}`);
}

// 六丰设备部管理看板-人员状态看板-获取组
export async function getZuBie(param){
  const { params } = param;
  const { OrgID, DSPOINTCODE } = params;
  return requestx(`${SB_IP}/EMPGroupPoint?Point=${DSPOINTCODE}&ORGID=${OrgID}`)
  // return requestx(`http://192.168.99.112/LFService/FUEMSService.svc/EMPGroupPoint?Point=1&ORGID=118`)
}

// 六丰设备部管理看板-人员状态看板-获取tabel数据
export async function getRYZT(GROUPID,ORGID){
  return  requestx(`${SB_IP}/EMPStateKanBan?GROUPID=${GROUPID}&ORGID=${ORGID}&inclusive=0&exclusive=99999`)
  // return requestx(`http://192.168.99.112/LFService/FUEMSService.svc/EMPStateKanBan?GROUPID=8029422978334720&ORGID=118&inclusive=0&exclusive=100`)
}
