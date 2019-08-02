import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import { LocaleProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dynamic from 'dva/dynamic';
import { getRouterData } from './common/router';
import Authorized from './utils/Authorized';
import styles from './index.less';
import JGSCZK from './routes/JGSCZK/JGSCZK'
import FMCheckPassWP from './routes/FMCheckPassWP/FMCheckPassWP1'


const { ConnectedRouter } = routerRedux;
const { AuthorizedRoute } = Authorized;
dynamic.setDefaultLoadingComponent(() => {
  return <Spin size="large" className={styles.globalSpin}/>;
});

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const UserLayout = routerData['/user'].component;
  const BasicLayout = routerData['/'].component;
  const xianbiezhuangkuang = routerData['/xianbiezhuangkuang'].component;
  // 库存明细
  const kucunmingxi = routerData['/kcmx'].component;
  // 涂装A
  const tuzhuanga = routerData['/tuzhuanga'].component;
  // 涂装调整
  const tztz = routerData[`/tztz`].component;
  // 除气精炼
  const chuqijinglian = routerData['/lingzhong1'].component;
  // 投料
  const touliao = routerData['/lingzhong'].component;
  // 低压铸造
  const diyazhuzao = routerData['/lingzhong2'].component;
  // 熔炉出汤
  const rongluchutang = routerData['/lingzhong3'].component;
  //WF1--工位看板--Xray
  const Xray = routerData['/Xray'].component;
  // 加工检查台
  const jiaGongJianChaTai = routerData['/jiaGongJianChaTai'].component;
  // 平衡氦漏
  const pinghenghailou = routerData['/pingheng'].component;
  // 机台状况看板
  const jitaizhuangkuangkanban = routerData['/Jitaizhuangkuangkanban'].component;
  // 涂装上料调整
  const lingzhong4 = routerData['/lingzhong4'].component;
  // 热处理炉
  const rechulilu = routerData['/Rechulilu'].component;
  // 热处理设备
  const rechulishebei = routerData['/Rechulishebei'].component;
  // 粗车线V2
  const CuchexianV2 = routerData['/CuchexianV2'].component;
  // //涂装上料
  // const tuzhuangshangliao =routerData['/lingzhong4'].components;
  //终检
  const zhongjian = routerData['/lingzhong5'].component;
  //粉透 粉底 色漆 KSL
  const fendi = routerData['/fendi'].component;
  //包装
  const baozhuang = routerData['/baoZhuang'].component;
  //精车
  const jingche = routerData['/jingche'].component;
  //成品看板
  const cpkb=routerData[`/cpkb`].component;


  //WM线别状况
  const WMxianbiezhuangkuang = routerData['/wmkanban1'].component;
  const WPxianbiezhuangkuang = routerData['/wpkanban1'].component;
  const WF1jitaixiaolv = routerData['/jiTaiXiaoLvKanBanWF1'].component;

  const WM1xiaolv1 = routerData['/jiTaiXiaoLvKanBanWM1'].component;
  const WPjiankong1 = routerData['/WPjiankong1'].component;


  // 涂装设备监控
  const tzsbjk = routerData['/tzsbjk'].component;

  //加工数量比对分析
  const zzsldbfx = routerData['/zzsldbfx'].component;

  //六丰设备部管理看板—点检执行汇总看板
  const djzxhz = routerData['/djzxhz'].component;
  //六丰设备部管理看板—点检执行未完成看板
  const djzxwwc = routerData['/djzxwwc'].component;
  //六丰设备部管理看板—保养执行汇总看板
  const byzxhz = routerData['/byzxhz'].component;
  //六丰设备部管理看板—保养执行未完成看板
  const byzxwwc = routerData['/byzxwwc'].component;
  //六丰设备管理看板—故障未完成看板
  const gzwxwwc = routerData['/gzwxwwc'].component;
  //六丰设备管理看板—超24小时未完成看板
  const c24xswwc = routerData['/c24xswwc'].component;
  //六丰设备管理看板—人员状态一览表
  const ryztylb = routerData['/ryztylb'].component;
  
  // 设备看板外框
  const zsbkb = routerData['/zsbkb'].component;
  // 定模定线状况一览表
  const dmdxkylb = routerData[`/dmdxkylb`].component;
  // 备模中模具状况一览表
  const bmzmjyib = routerData[`/bmzmjyib`].component;
  // 故障点图片
  const gzkb = routerData[`/gzkb`].component;
  // 故障点图片
  const gzkb2 = routerData[`/gzkb2`].component;
  // 报警图片
  const bjjt = routerData[`/bjjt`].component;
  //线别比对状况
  const xbdbzk = routerData['/xbdbzk'].component;
  // 生产状况看板
  const sczk = routerData['/sczk'].component;
  // 库存指示
  const KuCunZhiShi=routerData[`/kucunzhishi`].component

  return (
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/xianbiezhuangkuang" component={xianbiezhuangkuang}/>
          {/*<Route path="/gzwxwwc" component={gzwxwwc}/>*/}
          {/*<Route path="/c24xswwc" component={c24xswwc}/>*/}
          {/*<Route path="/byzxhz" component={byzxhz}/>*/}
          {/*<Route path="/byzxwwc" component={byzxwwc}/>*/}
          {/*<Route path="/djzxhz" component={djzxhz}/>*/}
          {/* <Route path="/djzxwwc" component={djzxwwc}/> */}
          <Route path="/ryztylb" component={ryztylb}/>
          <Route path="/tzsbjk" component={tzsbjk}/>
          <Route path="/bmzmjyib" component={bmzmjyib}/>
          <Route path="/dmdxkylb" component={dmdxkylb}/>
          <Route path="/zsbkb" component={zsbkb}/>
          <Route path="/user" component={UserLayout}/>
          <Route path="/zzsldbfx" component={zzsldbfx}/>
          <Route path="/lingzhong1" component={chuqijinglian}/>
          <Route path="/lingzhong" component={touliao}/>
          <Route path="/lingzhong2" component={diyazhuzao}/>
          <Route path="/LingZhong3" component={rongluchutang}/>
          <Route path="/xray" component={Xray}/>
          <Route path="/jiaGongJianChaTai" component={jiaGongJianChaTai}/>
          <Route path="/pingheng" component={pinghenghailou}/>
          <Route path="/Jitaizhuangkuangkanban" component={jitaizhuangkuangkanban}/>
          <Route path="/lingzhong4" component={lingzhong4}/>
          <Route path="/Rechulilu" component={rechulilu}/>
          <Route path="/Rechulishebei" component={rechulishebei}/>
          <Route path="/CuchexianV2" component={CuchexianV2}/>
          <Route path="/lingzhong5" component={zhongjian}/>
          <Route path="/gwkb" component={fendi}/>
          <Route path="/baoZhuang" component={baozhuang}/>
          <Route path="/jingche" component={jingche}/>
          <Route path="/wmkanban1" component={WMxianbiezhuangkuang}/>
          <Route path="/wpkanban1" component={WPxianbiezhuangkuang}/>
          <Route path="/jiTaiXiaoLvKanBanWF1" component={WF1jitaixiaolv}/>
          <Route path="/jiTaiXiaoLvKanBanWM1" component={WM1xiaolv1}/>
          <Route path="/WPjiankong1" component={WPjiankong1}/>
          <Route path="/tuzhuanga" component={tuzhuanga}/>
          <Route path="/kcmx" component={kucunmingxi}/>
          <Route path="/gzkb" component={gzkb}/>
          <Route path="/gzkb2" component={gzkb2}/>
          <Route path="/bjjt" component={bjjt}/>
          <Route path="/tztz" component={tztz}/>
          <Route path="/xbdbzk" component={xbdbzk}/>
          <Route path="/sczk" component={sczk}/>
          <Route path="/jgsczk" component={JGSCZK}/>
          <Route path="/FMCheckPassWP" component={FMCheckPassWP}/>
          <Route path="/cpkb" component={cpkb}/>
          <Route path="/kucunzhishi" component={KuCunZhiShi}/>
          <Route
            path="/"
            render={props => <BasicLayout {...props} />}
            // authority={[]}
            // redirectPath="/user/login"
          />
        </Switch>
      </ConnectedRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;
