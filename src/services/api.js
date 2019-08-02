import { stringify } from 'qs';
import request from '../utils/request';
import request1 from '../utils/request1';
import requestall from '../utils/requestall';
import requestx from '../utils/requestx';
import autorequest from '../utils/autorequest'




///////备 模 中 模 具 模 检 进 度 一 览 表//////////////////////////////////////////////////////////////////////////////////////
// export async function get_FMCheckPassWPData() {
//   return request1(`http://221.233.243.220/WebWatchPanel/FGetPanelData.ashx?_=1560134268340`)
// }

///////粉底、色漆、粉透、KSL/////////////////////////////////////////////////////////////////
export async function getDQFK_Data() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const ORGID = data['OrgID'];
  const myurl = data['EKANServer'];
  const DspointCode = data.DSPOINTCODE;
  return requestx(`${myurl}/getOutputData?OrgID=${ORGID}&DspointCode=${DspointCode}`)
}
export async function getDQFK_Data2() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const ORGID = data['OrgID'];
  const myurl = data['EKANServer'];
  const DspointCode = data.DSPOINTCODE;
  return requestx(`${myurl}/getFu_wm_production_temp?orgid=${ORGID}&dspointcode=${DspointCode}`)
}

export async function getBZOutputData(){
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const ORGID = data['OrgID'];
  const myurl = data['EKANServer'];
  const DspointCode = data.DSPOINTCODE;
  return requestx(`${myurl}/getBZOutputData?orgid=${ORGID}&dspointcode=${DspointCode}`)
}



/////////////////生产状况看板/////////////////////////////////////////////////////////////////////////
export async function getSCZK_DATA() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const ORGID = data['OrgID'];
  const myurl = data['EKANServer'];
  const DspointCode = data.DSPOINTCODE;
  return requestx(`${myurl}/getFu_wm_production_temp?orgid=${ORGID}&dspointcode=${DspointCode}`)
  // return requestx(`http://221.233.243.220/EKanService/EKanService.svc/getFu_wm_production_temp?orgid=168&dspointcode=DPSEGTZ01`)
}

////////////////////////////////////////////////////////////////////////////////////////////
//报警机台
////////////////////////////////////////////////////////////////////////////////////////////
export async function getAlertDevice() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const DSPOINTCODE = data[`DSPOINTCODE`];
  const OrgId = data[`OrgID`];
  const myurl = data['EKANServer'];
  return autorequest(`${myurl}/getAlertDevice?DSPOINTCODE=${DSPOINTCODE}&OrgId=${OrgId}`);
  // return requestx(`http://192.168.99.112/ekanservice_dev/EKanService.svc/getAlertDevice?DSPOINTCODE=YND01009&OrgId=118`)
}

export async function getAlertImg(params) {
  const url = params.split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  console.log(data);
  const OrgId = data[`OrgId`];
  const myurl = data['EKANServer'];
  const ID = data[`ID`];

  return autorequest(`${myurl}/getNGPicture?OrgId=${OrgId}&ID=${ID}`);
  // return requestx(`http://192.168.99.112/EKanService_dev/EKanService.svc/getNGPicture?OrgId=118&ID=1`)
}

export async function getAlertImg2(params) {
  const url = params.split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const OrgId = data[`OrgId`];
  const myurl = data['EKANServer'];
  const Model=data[`Model`]
  const opcode=data[`opcode`]
  return autorequest(`${myurl}/GetFileInfo?orgid=${OrgId}&Model=${Model}&opcode=${opcode}`);
  // return requestx(`http://221.233.243.220/EKanService/EKanService.svc/GetFileInfo?orgid=168&Model=R46&opcode=LFHTC`)
}


/////////////////////////////////////////////////////////////////////////////////////


//粗车线看板
export async function CCX_GETDATA() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const ORGID = data['OrgID'];
  const myurl = data['EKANServer'];
  const DspointCode = data.DSPOINTCODE;
  const tmplcode=data[`TMPLCODE`]
  return requestx(`${myurl}/GetWMRESEKAN?ORGID=${ORGID}&dspointcode=${DspointCode}&tmplcode=${tmplcode}`)
}

//机台状况看板
export async function JTZKKB_GETDATA() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const ORGID = data['OrgID'];
  const myurl = data['EKANServer'];
  const PageIndex = data['PAGESIZE'];
  const DspointCode = data.DSPOINTCODE;
  const tmplcode=data[`TMPLCODE`]
  return requestx(`${myurl}/GetFUWMPRODUCTIONTEMP2?ORGID=${ORGID}&dspointcode=${DspointCode}&tmplcode=${tmplcode}`)
}


// 武汉六丰WF1管理看板—铸造数量比对分析
export async function getZZSLFXDB(params) {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const ORGID = data['OrgID'];
  const myurl = data['EKANServer'];
  const PageIndex = data['PAGESIZE'];
  return autorequest(`${myurl}/getSegDKProTemp?OrgId=${ORGID}&PageIndex=${PageIndex}`);
}

// WF1车间看板—生产状况
export async function getSCZKKB() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const ORGID = data['OrgID'];
  const myurl = data['EKANServer'];
  const PageIndex = data['PAGESIZE'];
  return autorequest(`${myurl}/getSegDKEkan?OrgId=${ORGID}&PageIndex=${PageIndex}`);
}


// 调取班别接口
export async function getBanBie() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const DspointCode = data.DSPOINTCODE === undefined ? '' : data.DSPOINTCODE;
  const ORGID = data['OrgID'];
  const myurl = data['EKANServer'];
  return requestx(`${myurl}/GetSHIFTCODE_CUR?OrgID=${ORGID}&DISPLAYPOINTCODE=${DspointCode}`);
}


//涂装A上料指令
export async function TZSLA_getDatas() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const ORGID = data['OrgID'];
  const myurl = data['EKANServer'];
  return requestx(`${myurl}/GetTZSLDirective?OrgId=${ORGID}`);
  // return requestx(`http://192.168.99.43/EKanService_dev/EKanService.svc/GetTZSLDirective?OrgId=118`);
}

//涂装A上料调整
export async function TZTZ_getDatas() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const ORGID = data['OrgID'];
  const myurl = data['EKANServer'];
  const DspointCode = data.DSPOINTCODE;
  const ShiftCode = data['ShiftCode'];
  return requestx(`${myurl}/GetTZSLEkan?OrgId=${ORGID}&DspointCode=${DspointCode}&ShiftCode=${ShiftCode}`)
  // return requestx(`http://192.168.99.43/EKanService_dev/EKanService.svc/GetTZSLEkan?OrgId=118&DspointCode=YND01009&ShiftCode=2A`)
}


//投料看板  钱朗
export async function TLKB_getDatas() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const DspointCode = data.DSPOINTCODE;
  const myurl = data['EKANServer'];
  const ORGID = data['OrgID'];
  const ShiftCode = data['ShiftCode'];
  // console.log(`${myurl}/GetRJTouLiaoEKan?OrgId=${ORGID}&ShiftCode=${ShiftCode}&DspointCode=${DspointCode}`);
  return requestx(`${myurl}/GetRJTouLiaoEKan?OrgId=${ORGID}&ShiftCode=${ShiftCode}&DspointCode=${DspointCode}`);
  // return requestx(`http://192.168.99.43/EKanService_dev/EKanService.svc/GetRJTouLiaoEKan?OrgId=118&ShiftCode=2A`);
}

// 武汉六丰WP1设备看板—设备监控
export async function TZSBJK_getDatas() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const DspointCode = data.DSPOINTCODE;
  const myurl = data['EKANServer'];
  const ORGID = data['OrgID'];
  const ShiftCode = data['ShiftCode'];
  return requestx(`${myurl}/getRCLDeviceEkan?OrgId=${ORGID}&DspointCode=${DspointCode}&TagNames=${configs201905131052.TZSBJK_TagNames}`);
}


// 铝汤成分分析看板/除气精炼 左表  钱朗
export async function CQJL_getDatas() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const myurl = data['EKANServer'];
  const ORGID = data['OrgID'];
  const DspointCode = data.DSPOINTCODE;
  const ShiftCode = data['ShiftCode'];
  console.log(`${myurl}/GetLSAnalysisEKan?OrgId=${ORGID}&ShiftCode=${ShiftCode}&DspointCode=${DspointCode}`);
  return requestx(`${myurl}/GetLSAnalysisEKan?OrgId=${ORGID}&ShiftCode=${ShiftCode}&DspointCode=${DspointCode}`);
  // return requestx(`http://192.168.99.43/EKanService_dev/EKanService.svc/GetLSAnalysisEKan?OrgId=118&ShiftCode=2A`);
}

// // 铝汤成分分析看板/除气精炼 右表  钱朗
// export async function CQJL_getDatas2() {
//   const url=window.location.search.substr(1).split('&')
//   const data={};
//   url.map(item=>{data[item.split('=')[0]]=item.split('=')[1];
//   })
//   const DspointCode=data.DSPOINTCODE
//   const myurl=data['EKANServer']
//   const ORGID=data.OrgID
//   const ShiftCode=data.ShiftCode
//   console.log(`${myurl}/GetJLIndicate?OrgId=${ORGID}&ShiftCode=${ShiftCode}&DspointCode=${DspointCode}`)
//   return requestx(`${myurl}/GetJLIndicate?OrgId=${ORGID}&ShiftCode=${ShiftCode}&DspointCode=${DspointCode}`);
//   // return requestx(`http://192.168.99.43/EKanService_dev/EKanService.svc/GetJLIndicate?OrgId=118&ShiftCode=2A`);
// }

// 熔解炉  熔炉出汤
export async function queryrongjielu() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const myurl = data.EKANServer;
  const ORGID = data.OrgID;
  const DspointCode = data.DSPOINTCODE;
  const TagNames = data.TagNames;
  return requestall(`${myurl}/getRJEKanInfo?OrgId=${ORGID}&DspointCode=${DspointCode}&TagNames=${configs201905131052.TMPLRJ02_TagNames}`);
  // return requestall('http://192.168.99.43/EKanService_dev/EKanService.svc/getRJEKanInfo?OrgId=118&DspointCode=YND0100115&TagNames=SHIFTOUT,ONLINESTATE,MODEL');
  // return requestall('http://221.233.243.220/EKanService/EKanService.svc/getRJEKanInfo?OrgId=168&DspointCode=DPRESRJ&TagNames=R_LY_TEMP,R_LQ_TEMP,R_YM_HEIGHT,R_YM_MAX,R_RJ_BZ');
}


// 低压铸造
export async function querydiyazhuzao() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const myurl = data.EKANServer;
  const ORGID = data.OrgID;
  const DspointCode = data.DSPOINTCODE;
  console.log(`${myurl}/getDKEKanInfo?OrgId=${ORGID}&DspointCode=${DspointCode}`);
  return requestall(`${myurl}/getDKEKanInfo?OrgId=${ORGID}&DspointCode=${DspointCode}`);
  // return requestall('http://192.168.99.43/EKanService_dev/EKanService.svc/getDKEKanInfo?OrgId=118&DspointCode=YND0100115');
}


// 平衡氦漏
export async function getPinghenghailouData() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const myurl = data.EKANServer;
  const ORGID = data.OrgID;
  const DspointCode = data.DSPOINTCODE;
  const tmplcode=data[`TMPLCODE`]
  console.log(`${myurl}/getFUCTCol?OrgId=${ORGID}&DspointCode=${DspointCode}&tmplcode=${tmplcode}`);
  return requestall(`${myurl}/getFUCTCol?OrgId=${ORGID}&DspointCode=${DspointCode}&tmplcode=${tmplcode}`);
  // return requestall('http://192.168.99.43/EKanService_dev/EKanService.svc/getFUCTCol?OrgId=118&DspointCode=YND01009');
}


// 热处理设备
export async function queryrechulishebei() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const myurl = data.EKANServer;
  const ORGID = data.OrgID;
  const DspointCode = data.DSPOINTCODE;
  console.log(`${myurl}/getRCLDeviceEkan?OrgId=168&DspointCode=${DspointCode}&TagNames=${configs201905131052.TMPLHT_TagNames}`);
  return requestall(`${myurl}/getRCLDeviceEkan?OrgId=${ORGID}&DspointCode=${DspointCode}&TagNames=${configs201905131052.TMPLHT_TagNames}`);
  // return requestall('http://192.168.99.43/EKanService_dev/EKanService.svc/getRCLDeviceEkan?OrgId=118&DspointCode=YND0100115&TagNames=SHIFTOUT,ONLINESTATE');
  // return requestall(`http://221.233.243.220/EKanService/EKanService.svc/getRCLDeviceEkan?OrgId=168&DspointCode=DPRESHT&TagNames=R_GRQD1,R_GT1,R_GT2,R_GT3,R_GT4,R_LQ1,R_SX1,R_SX2,R_SXQD1`);
}

// 库存明细  钱朗
export async function KCMX_getDatas(params) {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const myurl = data.EKANServer;
  const ORGID = data.OrgID;
  const DspointCode = data.DSPOINTCODE;
  console.log(`${myurl}/getTBLRECLABEL?orgid=168&DISPLAYPOINTCODE=${DspointCode}`);
  return autorequest(`${myurl}/getTBLRECLABEL?orgid=${ORGID}&DISPLAYPOINTCODE=${DspointCode}`);
  // return requestx(`http://192.168.99.43/EKanService_dev/EKanService.svc/getTBLRECLABEL?orgid=118&DISPLAYPOINTCODE=YND01009`);
}


// 热处理 生产状况   华
export async function RCLSC_getDatas() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const myurl = data.EKANServer;
  const ORGID = data.OrgID;
  const DspointCode = data.DSPOINTCODE;
  console.log(`${myurl}/getOutputData?OrgId=${ORGID}&DspointCode=${DspointCode}`);
  return requestx(`${myurl}/getOutputData?OrgId=${ORGID}&DspointCode=${DspointCode}`);
  // return requestx(`http://221.233.243.220/EKanService/EKanService.svc/getOutputData?OrgId=168&DspointCode=DPRESHT`)
}


// Xray  朗
export async function getXrayData() {
  const url = window.location.search.substr(1).split('&');
  const data = {};
  url.map(item => {
    data[item.split('=')[0]] = item.split('=')[1];
  });
  const myurl = data.EKANServer;
  const ORGID = data.OrgID;
  const DspointCode = data.DSPOINTCODE;
  const ShiftCode = data.ShiftCode;
  // console.log(`${myurl}/getRescodeXrayCol?OrgId=${ORGID}&DspointCode=${DspointCode}&ShiftCode=${ShiftCode}`)
  return requestx(`${myurl}/getRescodeXrayCol?OrgId=${ORGID}&DspointCode=${DspointCode}&ShiftCode=${ShiftCode}`);
  // return requestall(`http://192.168.99.43/EKanService_dev/EKanService.svc/getRescodeXrayCol?OrgId=118&DspointCode=YND01009&ShiftCode=2A`);
  // return requestall(`http://221.233.243.220/EKanService/EKanService.svc/getRescodeXrayCol?OrgId=168&DspointCode=DPRESXY`);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export async function queryStalets() {
  console.log(window.document.location.href);
  return request1('http://192.168.99.34/EKanService/EKanService.svc/getTblonwipitem?orgid=118&DISPLAYPOINTCODE=YND01009', {
    mode: 'cors',
    header: { 'content-type': 'application/json' },
    method: 'GET',
    credentials: 'include',
    Origin: '*',
  });
}

// 熔解投料获取后端数据
export async function querytouliao() {
  console.log(window.document.location.href);
  return request1('http://192.168.99.34/EKanService/EKanService.svc/getTblonwipitem?orgid=118&DISPLAYPOINTCODE=YND01009', {
    mode: 'cors',
    header: { 'content-type': 'application/json' },
    method: 'GET',
    credentials: 'include',
    Origin: '*',
  });
}

export async function queryjianshi() {
  console.log(window.document.location.href);
  return request1('http://192.168.99.34/EKanService/EKanService.svc/getTblonwipitemPro?orgid=118&DISPLAYPOINTCODE=YND01009', {
    mode: 'cors',
    header: { 'content-type': 'application/json' },
    method: 'GET',
    credentials: 'include',
    Origin: '*',
  });
}

// //铝汤成分看板
// export async function querychengfen(){
//   console.log(window.document.location.href);
//   return request1('http://192.168.99.34/EKanService/EKanService.svc/getTbllfaiwateranalyseinfo?orgid=118',{
//     mode:'cors',
//     header:{'content-type':'application/json'},
//     method:'GET',
//     credentials:'include',
//     Origin:'*',
//   });
// }
// export async function querytianjia(){
//   console.log(window.document.location.href);
//   return request1('http://192.168.99.34/EKanService/EKanService.svc/getItemcode1?orgid=118&DISPLAYPOINTCODE=YND01009',{
//     mode:'cors',
//     header:{'content-type':'application/json'},
//     method:'GET',
//     credentials:'include',
//     Origin:'*',
//   });
// }









// export async function queryProjectNotice() {
//   return request('/api/project/notice');
// }


// export async function queryActivities() {
//   return request('/api/activities');
// }





export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}




export async function getInter() {
  return request('http://192.168.99.19/EKanService_dev/EKanService.svc/GetFUWMPRODUCTIONTEMP?ORGID=118&dspointcode=123');
}

export async function checkData(params) {
  console.log(params, 1321);
  return request('/api/lossTime/check', {
    method: 'POST',
    body: params,
  });
}

// 铝汤看板
export async function querylvtangkanban() {
  return requestall('http://192.168.99.34/EKanService/EKanService.svc/getChuQiData?orgid=118&DISPLAYPOINTCODE=YND01009');
}

// 溶解投料
export async function queryrongjietouliao() {
  return requestall('http://192.168.99.34/EKanService/EKanService.svc/getTouLiaoData?orgid=118&DISPLAYPOINTCODE=YND01009');
}


function ccc() {
  const p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject('请求超时');
    }, 200);
  });
  return p;
}

//   Promise.race([ddd(url, options), ccc()])
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => {
//       return data;
//     }).catch(data => console.log(data, 321321));

// async function f() {
//
// }

//hongjian
export async function gethongjian() {
  // const a=Promise.race([requestx(`http://192.168.99.19/BIQSSERVICE/BIQSSERVICE.svc/getRO_TASKLIST?orgid=118`),ccc()])
  //   .then(data=>{return data})
  //   .catch(data=>console.log(data))
  //  return a
  return requestx(`http://192.168.99.19/BIQSSERVICE/BIQSSERVICE.svc/getRO_TASKLIST?orgid=118`);
}





