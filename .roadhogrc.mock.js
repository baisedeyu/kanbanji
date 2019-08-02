import mockjs from 'mockjs';
// import { getRule, postRule } from './mock/rule';
// import {getTableData} from "./mock/table";
// import { getActivities } from './mock/api';
// import { getNotices } from './mock/notices';
// import {getMyDoubleTableData1} from "./mock/mydoubletable1";
// import {getDoubleTableData2} from "./mock/mydoubletable2";
// import {getScalarsd} from "./mock/WStates";
import { format, delay } from 'roadhog-api-doc';
// import {getLingData1} from './mock/touliao1';
// import {getLingData2} from './mock/jianshi1';
// import {getLing1Data1} from './mock/lvtang1';
// import {getLing1Data2} from './mock/zhishi1';
// import {getLing2Data2} from './mock/data2';
// import {getLing2Data1} from './mock/diyadata1';
// import {getLing3Data1} from './mock/chutang1';
// import {getLing3Data2} from './mock/chutang2';
// import {getLing4Data1} from './mock/tuzhuangshangliao1';
// import {getLing4Data2} from './mock/tuzhuangshangliao2';
// import {getLing5Data1} from './mock/zhongjian1';
// import {getLing5Data2} from './mock/zhongjian2';
// import {getLing6Data1} from './mock/KSL1';
// import {getLing6Data2} from './mock/KSL2';
// import {getLing7Data1} from './mock/fentou1';
// import {getLing7Data2} from './mock/fentou2';
// import {getLing8Data1} from './mock/seqi1';
// import {getLing8Data2} from './mock/seqi2';
// import {getLing9Data1} from './mock/fendi1';
// import {getLing9Data2} from './mock/fendi2';
// import {getBaoZhuang} from './mock/baoZhuang';
// import {getPingHengHaiLouTable} from './mock/pingHengHaiLouTable';
// import {getJiaGongJianChaTai} from './mock/jiaGongJianChaTai';
// import {getRXray} from './mock/RXray';
// import {getProjectZiliao} from './mock/shengchanxianbie'

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
  //生产线别资料
  // 'Get /api/shengchanxianbie/shengchanxianbie1':getProjectZiliao,
  // 'GET /api/WStates/amount':getScalarsd,
  // // 带2张表的看板的1号数据 粗车线看板
  // 'GET /api/table/doubleTableData' :getMyDoubleTableData1,
  // // 带2张表的看板的2号数据 粗车线看板
  // 'GET /api/table/doubleTableData2' :getDoubleTableData2,
  //
  // //熔解看板
  // 'GET /api/touliao/touliao1':getLingData1,
  //
  // //监视看板
  // 'GET /api/jianshi/jianshi1':getLingData2,
  //
  // //铝汤成分看板
  // 'GET /api/lvtang/lvtang1':getLing1Data1,
  //
  // 'GET /api/zhishi/zhishi1':getLing1Data2,
  // //低压铸造
  // 'GET /api/diyazhuzao2/diyadata2':getLing2Data2,
  //
  // 'GET /api/diyazhuzao1/diyadata1':getLing2Data1,
  //
  // //熔炉出汤
  // 'GET /api/chutang1/chutangdata1':getLing3Data1,
  //
  // 'GET /api/chutang2/chutangdata2':getLing3Data2,
  //
  // //涂装A上料
  // 'GET /api/tuzhuangshangliao1/tuzhuangdata1':getLing4Data1,
  //
  // 'GET /api/tuzhuangshangliao2/tuzhuangdata2':getLing4Data2,
  //
  // //终检
  // 'GET /api/zhongjian1/zhongjiandata1':getLing5Data1,
  // 'GET /api/zhongjian2/zhongjiandata2':getLing5Data2,
  //
  // //KSL
  // 'GET /api/KSL1/KSLdata1':getLing6Data1,
  // 'GET /api/KSL2/KSLdata2':getLing6Data2,
  //
  // //粉透看板
  // 'GET /api/fentou1/fentoudata1':getLing7Data1,
  // 'GET /api/fentou2/fentoudata2':getLing7Data2,
  //
  // //色漆看板
  // 'GET /api/seqi1/seqidata1':getLing8Data1,
  // 'GET /api/seqi2/seqidata2':getLing8Data2,
  //
  // //粉底看板
  // 'GET /api/fendi1/fendidata1':getLing9Data1,
  // 'GET /api/fendi2/fendidata2':getLing9Data2,
  //
  // //包装
  // 'GET /api/baoZhuang' :getBaoZhuang,
  // //加工检查台
  // 'GET /api/jiaGongJianChaTai' :getJiaGongJianChaTai,
  // //平衡氦漏
  // 'GET /api/pingHengHaiLouTable' :getPingHengHaiLouTable,
  // //RXray
  // 'GET /api/RXray' :getRXray,
  //
  //
  // 'GET /api/table/tableData' : getTableData,
  // // 支持值为 Object 和 Array
  // 'GET /api/currentUser': {
  //   $desc: '获取当前用户接口',
  //   $params: {
  //     pageSize: {
  //       desc: '分页',
  //       exp: 2,
  //     },
  //   },
  //   $body: {
  //     name: 'Serati Ma',
  //     avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  //     userid: '00000001',
  //     notifyCount: 12,
  //     workshop: 'xxxx',
  //   },
  // },
  // // GET POST 可省略
  // 'GET /api/users': [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //   },
  // ],
  // 'GET /api/activities': getActivities,
  // // 'GET /api/rule': getRule,
  // 'POST /api/rule': {
  //   $params: {
  //     pageSize: {
  //       desc: '分页',
  //       exp: 2,
  //     },
  //   },
  //   $body: postRule,
  // },
  //
  // 'GET /api/tags': mockjs.mock({
  //   'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }],
  // }),
  // 'POST /api/login/account': (req, res) => {
  //   const { password, userName, type } = req.body;
  //   if (password === '888888' && userName === 'admin') {
  //     res.send({
  //       status: 'ok',
  //       type,
  //       currentAuthority: 'admin',
  //     });
  //     return;
  //   }
  //   if (password === '123456' && userName === 'user') {
  //     res.send({
  //       status: 'ok',
  //       type,
  //       currentAuthority: 'user',
  //     });
  //     return;
  //   }
  //   res.send({
  //     status: 'error',
  //     type,
  //     currentAuthority: 'guest',
  //   });
  // },
  // 'POST /api/register': (req, res) => {
  //   res.send({ status: 'ok', currentAuthority: 'user' });
  // },
  // 'GET /api/notices': getNotices,
  // 'GET /api/500': (req, res) => {
  //   res.status(500).send({
  //     timestamp: 1513932555104,
  //     status: 500,
  //     error: 'error',
  //     message: 'error',
  //     path: '/base/category/list',
  //   });
  // },
  // 'GET /api/404': (req, res) => {
  //   res.status(404).send({
  //     timestamp: 1513932643431,
  //     status: 404,
  //     error: 'Not Found',
  //     message: 'No message available',
  //     path: '/base/category/list/2121212',
  //   });
  // },
  // 'GET /api/403': (req, res) => {
  //   res.status(403).send({
  //     timestamp: 1513932555104,
  //     status: 403,
  //     error: 'Unauthorized',
  //     message: 'Unauthorized',
  //     path: '/base/category/list',
  //   });
  // },
  'GET /api/401': (req, res) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/menus':[
    {
      MENUDESC: 'Shiyan',
      icon: 'setting',
      MDLCODE: 'shiyan',
    },
    {
      MENUDESC: 'Xray',
      icon: 'setting',
      MDLCODE: 'xray',
    },
    // {
    //   MENUDESC: 'Request',
    //   icon: 'setting',
    //   MDLCODE: 'request',
    // },
     {
      MENUDESC: 'Setting',
      icon: 'setting',
      MDLCODE: 'setting',
    },

    {
      MENUDESC: '熔解投料',
      icon: '1234',
      MDLCODE: 'LingZhong',
    },
    {
      MENUDESC:'铝汤成分分析看板',
      icon:'1234',
      MDLCODE:'LingZhong1',
    },
    {
      MENUDESC:'低压铸造',
      icon:'1234',
      MDLCODE:'LingZhong2',
    },

    {
      MENUDESC:'熔炉出汤',
      icon:'1234',
      MDLCODE:'LingZhong3',
    },
    {
      MENUDESC:'涂装A上料',
      icon:'1234',
      MDLCODE:'LingZhong4',
    },
    {
      MENUDESC:'终检',
      icon:'1234',
      MDLCODE:'LingZhong5',
    },
    {
      MENUDESC:'KSL',
      icon:'1234',
      MDLCODE:'LingZhong6',
    },
    {
      MENUDESC:'粉透',
      icon:'1234',
      MDLCODE:'LingZhong7',
    },
    {
      MENUDESC:'色漆',
      icon:'1234',
      MDLCODE:'LingZhong8',
    },
    {
      MENUDESC:'粉底',
      icon:'1234',
      MDLCODE:'LingZhong9',
    },
    // {
    //   MENUDESC:'看板',
    //   icon:'1234',
    //   MDLCODE:'Kanban',
    // },
    // {
    //   MENUDESC:'zhong1',
    //   icon:'1234',
    //   MDLCODE:'Zhong1',
    // },
    {
      MENUDESC: '涂装A上料指令',
      icon: '1234',
      MDLCODE: 'tuzhuanga',
    },
    {
      MENUDESC: '库存明细',
      icon: '1234',
      MDLCODE: 'kcmx',
    },
    {
      MENUDESC: '包装',
      icon: '1234',
      MDLCODE: 'baoZhuang',
    },
    {
      MENUDESC: '包装',
      icon: '1234',
      MDLCODE: 'baoZhuang',
    },
    // {
    //   MENUDESC: 'RXray',
    //   icon: '1234',
    //   MDLCODE: 'RXray',
    // },
    {
      MENUDESC: '加工检查台',
      icon: '1234',
      MDLCODE: 'jiaGongJianChaTai',
    },
    {
      MENUDESC: '平衡氦漏',
      icon: '1234',
      MDLCODE: 'pingheng',
    },
    {
      MENUDESC: '机台状况看板',
      icon: '1234',
      MDLCODE: 'Jitaizhuangkuangkanban',
    },
    {
      MENUDESC: '热处理炉',
      icon: '1234',
      MDLCODE: 'Rechulilu',
    },
    {
      MENUDESC: '热处理炉-设备',
      icon: '1234',
      MDLCODE: 'Rechulishebei',
    },{
      MENUDESC: '粗车线-V2',
      icon: '1234',
      MDLCODE: 'CuchexianV2',
    },
    {
      MENUDESC: '精车',
      icon: '1234',
      MDLCODE: 'Jingche',
    },
    {
      MENUDESC: 'WF1-生产状况看板',
      icon: '1234',
      MDLCODE: 'xianbiezhuangkuang',
    },
    {
      MENUDESC: 'WF1-机台效率看板',
      icon: '1234',
      MDLCODE: 'jiTaiXiaoLvKanBanWF1',
    },
    {
      MENUDESC: 'WM1-生产状况看板',
      icon: '1234',
      MDLCODE: 'WMkanban1',
    },
    {
      MENUDESC: 'WM1-机台效率看板',
      icon: '1234',
      MDLCODE: 'jiTaiXiaoLvKanBanWM1',
    },
    {
      MENUDESC: 'WP1-生产状况看板',
      icon: '1234',
      MDLCODE: 'WPkanban1',
    },
    {
      MENUDESC: 'WP-设备监控看板',
      icon: '1234',
      MDLCODE: 'WPjiankong1',
    },
    {
      MENUDESC: '加工数量比对分析',
      icon: '1234',
      MDLCODE: 'zzsldbfx',
    },
    {
      MENUDESC: '六丰设备部管理看板—点检执行汇总看板',
      icon: '1234',
      MDLCODE: 'djzxhz',
    },
    {
      MENUDESC: '六丰设备部管理看板—点检执行未完成看板',
      icon: '1234',
      MDLCODE: 'djzxwwc',
    },
    {
      MENUDESC: '六丰设备部管理看板—保养执行汇总看板',
      icon: '1234',
      MDLCODE: 'byzxhz',
    },
    {
      MENUDESC: '六丰设备部管理看板—保养执行未完成看板',
      icon: '1234',
      MDLCODE: 'byzxwwc',
    },
    {
      MENUDESC: '六丰设备管理看板—故障未完成看板',
      icon: '1234',
      MDLCODE: 'gzwxwwc',
    },
    {
      MENUDESC: '六丰设备管理看板—超24小时未完成看板',
      icon: '1234',
      MDLCODE: 'c24xswwc',
    },
  ],
};

export default (noProxy ? {} : delay(proxy, 0));
