import { createElement } from 'react';
import dynamic from 'dva/dynamic';
import pathToRegexp from 'path-to-regexp';
// import { getMenuData } from './menu';

let routerDataCache;

const modelNotExisted = (app, model) =>
  // eslint-disable-next-line
  !app._models.some(({ namespace }) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  });

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => {
  // () => require('module')
  // transformed by babel-plugin-dynamic-import-node-sync
  if (component.toString().indexOf('.then(') < 0) {
    models.forEach(model => {
      if (modelNotExisted(app, model)) {
        // eslint-disable-next-line
        app.model(require(`../models/${model}`).default);
      }
    });
    return props => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return createElement(component().default, {
        ...props,
        routerData: routerDataCache,
      });
    };
  }
  // () => import('module')
  return dynamic({
    app,
    models: () =>
      models.filter(model => modelNotExisted(app, model)).map(m => import(`../models/${m}.js`)),
    // add routerData prop
    component: () => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return component().then(raw => {
        const Component = raw.default || raw;
        return props =>
          createElement(Component, {
            ...props,
            routerData: routerDataCache,
          });
      });
    },
  });
};

function getFlatMenuData(menus) {
  let keys = {};
  menus.forEach(item => {
    if (item.children) {
      keys[item.path] = { ...item };
      keys = { ...keys, ...getFlatMenuData(item.children) };
    } else {
      keys[item.path] = { ...item };
    }
  });
  return keys;
}

export const getRouterData = app => {
  const routerConfig = {
    '/setting': {
      component: dynamicWrapper(app, [], () => import('../routes/Setting/Setting')),
    },
    '/hongjian2': {
      component: dynamicWrapper(app, [], () => import('../routes/1234/Hongjian2')),
    },
    '/zsbkb': {
      component: dynamicWrapper(app, [], () => import('../routes/Shebeiguanlikanban/SheBeiZong')),
    },
    // 定模定线模具状况一览表
    '/dmdxkylb': {
      component: dynamicWrapper(app, [], () => import('../routes/DMDX/DMDXKYLB')),
    },
    '/bmzmjyib': {
      component: dynamicWrapper(app, [], () => import('../routes/DMDX/BMZKYLB')),
    },
    '/tzsbjk': {
      component: dynamicWrapper(app, [], () => import('../routes/TZSBJK/TZSBJK')),
    },
    '/kcmx': {
      component: dynamicWrapper(app, [], () => import('../routes/KuCunMingXi/KuCunMingXi')),
    },
    '/zzsldbfx': {
      component: dynamicWrapper(app, [], () => import('../routes/ZhuZaoSLDBFX/ZhuZaoSLDBFX')),
    },
    '/gzwxwwc': {
      component: dynamicWrapper(app, [], () => import('../routes/Shebeiguanlikanban/Guzhangweiwancheng')),
    },
    '/c24xswwc': {
      component: dynamicWrapper(app, [], () => import('../routes/Shebeiguanlikanban/Chao24xiaoshiweiwancheng')),
    },
    '/byzxhz': {
      component: dynamicWrapper(app, [], () => import('../routes/Shebeiguanlikanban/Baoyangzhixinghuizong')),
    },
    '/byzxwwc': {
      component: dynamicWrapper(app, [], () => import('../routes/Shebeiguanlikanban/Baoyangzhixingweiwancheng')),
    },
    '/djzxhz': {
      component: dynamicWrapper(app, [], () => import('../routes/Shebeiguanlikanban/DianJianZhiXingHuiZong')),
    },
    '/djzxwwc': {
      component: dynamicWrapper(app, [], () => import('../routes/Shebeiguanlikanban/DianJianZhiXingWeiWanCheng')),
    },
    '/ryztylb': {
      component: dynamicWrapper(app, [], () => import('../routes/Shebeiguanlikanban/Renyuanzhuangtai')),
    },

    '/Shiyan': {
      component: dynamicWrapper(app, [], () => import('../routes/Shiyan')),
    },
    '/Rechulishebei': {
      component: dynamicWrapper(app, [], () => import('../routes/Rechulishebei/Rechulishebei')),
    },
    '/CuchexianV2': {
      component: dynamicWrapper(app, [], () => import('../routes/CuchexianV2/CuchexianV2')),
    },
    '/Rechulilu': {
      component: dynamicWrapper(app, [], () => import('../routes/Rechulilu/Rechulilu')),
    },
    '/pingheng': {
      component: dynamicWrapper(app, [], () => import('../routes/Pinghenghailou/Pinghenghailou')),
    },
    // 机台状况看板
    '/Jitaizhuangkuangkanban': {
      component: dynamicWrapper(app, [], () => import('../routes/Jitaizhuangkuangkanban/Jitaizhuangkuangkanban')),
    },
    '/Xray': {
      component: dynamicWrapper(app, [], () => import('../routes/Xray/Xray')),
    },
    '/Hongjian': {
      component: dynamicWrapper(app, [], () => import('../routes/1234/Hongjian')),
    },
    '/tuzhuanga': {
      component: dynamicWrapper(app, [], () => import('../routes/TuZhuangA/TuZhuangA')),
    },
    '/tztz': {
      component: dynamicWrapper(app, [], () => import('../routes/TuZhuangTiaoZheng/TuZhuangTiaoZheng')),
    },
    '/lingzhong': {
      component: dynamicWrapper(app, [], () => import('../routes/LingZhong/LingZhong')),
    },
    '/lingzhong1': {
      component: dynamicWrapper(app, [], () => import('../routes/LingZhong1/LingZhong1'))
    },
    '/lingzhong2': {
      component: dynamicWrapper(app, [], () => import('../routes/LingZhong2/LingZhong2'))
    },
    '/lingzhong3': {
      component: dynamicWrapper(app, [], () => import('../routes/LingZhong3/LingZhong3'))
    },
    '/lingzhong4': {
      component: dynamicWrapper(app, [], () => import('../routes/LingZhong4/LingZhong4'))
    },
    '/lingzhong5': {
      component: dynamicWrapper(app, [], () => import('../routes/LingZhong5/LingZhong5'))
    },
    '/fendi': {
      component: dynamicWrapper(app, [], () => import('../routes/LingZhong9/FenDi'))
    },
    '/zhong1': {
      component: dynamicWrapper(app, [], () => import('../routes/Zhong1/Zhong1'))
    },
    '/xianbiezhuangkuang': {
      component: dynamicWrapper(app, [], () => import('../routes/xianbiezhuangkuang/xianbiezhuangkuang'))
    },
    '/jingche': {
      component: dynamicWrapper(app, [], () => import('../routes/Jingche/Jingche')),
    },
    '/wmkanban1': {
      component: dynamicWrapper(app, [], () => import('../routes/WMkanban1/WMkanban1')),
    },
    '/wpkanban1': {
      component: dynamicWrapper(app, [], () => import('../routes/WPkanban1/WPkanban1')),
    },
    '/jiTaiXiaoLvKanBanWF1': {
      component: dynamicWrapper(app, [], () => import('../routes/xianbiezhuangkuang/jiTaiXiaoLvKanBanWF1')),
    },
    '/jiTaiXiaoLvKanBanWM1': {
      component: dynamicWrapper(app, [], () => import('../routes/WMkanban1/jiTaiXiaoLvKanBanWM1')),
    },
    '/WPjiankong1': {
      component: dynamicWrapper(app, [], () => import('../routes/WPkanban1/WPjiankong1')),
    },
    //俊达
    '/baoZhuang': {
      component: dynamicWrapper(app, [], () => import('../routes/1234/BaoZhuang')),
    },
    '/RXray': {
      component: dynamicWrapper(app, [], () => import('../routes/1234/RXray')),
    },
    '/jiaGongJianChaTai': {
      component: dynamicWrapper(app, [], () => import('../routes/1234/jiaGongJianChaTai')),
    },
    '/request': {
      component: dynamicWrapper(app, [], () => import('../routes/Request/index')),
    },
    '/statetable': {
      component: dynamicWrapper(app, [], () => import('../routes/MyStateTableBox/MyTableBox')),
    },
    '/doubletable': {
      component: dynamicWrapper(app, [], () => import('../routes/MyDoubleTableBox/MyDoubleTableBox')),
    },
    '/boardstatetable': {
      component: dynamicWrapper(app, [], () => import('../routes/MyBoardStateTable/MyBoardStateTable')),
    },
    '/': {
      component: dynamicWrapper(app, ['user'], () => import('../layouts/BasicLayout')),
    },
    '/result/success': {
      component: dynamicWrapper(app, [], () => import('../routes/Result/Success')),
    },
    '/result/fail': {
      component: dynamicWrapper(app, [], () => import('../routes/Result/Error')),
    },
    '/exception/403': {
      component: dynamicWrapper(app, [], () => import('../routes/Exception/403')),
    },
    '/exception/404': {
      component: dynamicWrapper(app, [], () => import('../routes/Exception/404')),
    },
    '/exception/500': {
      component: dynamicWrapper(app, [], () => import('../routes/Exception/500')),
    },
    '/exception/trigger': {
      component: dynamicWrapper(app, ['error'], () =>
        import('../routes/Exception/triggerException')
      ),
    },
    '/user': {
      component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
    },
    // 故障点图片
    '/gzkb': {
      component: dynamicWrapper(app, [], () => import('../routes/GuZhangKanBan/GZKB')),
    },
    '/gzkb2': {
      component: dynamicWrapper(app, [], () => import('../routes/GuZhangKanBan/GZKB2')),
    },
    // 报警图片
    '/bjjt': {
      component: dynamicWrapper(app, [], () => import('../routes/GuZhangKanBan/BJJT')),
    },
    // 线别比对状况
    '/xbdbzk': {
      component: dynamicWrapper(app, [], () => import('../routes/XBDBZK/XBDBZK')),
    },
    // 生产状况看板
    '/sczk': {
      component: dynamicWrapper(app, [], () => import('../routes/ShengChanZhuangKuang/ShengChanZhuangKuang')),
    },
    //成品看板
    // 生产状况看板
    '/cpkb': {
      component: dynamicWrapper(app, [], () => import('../routes/ChengPinKanBan/ChengPinKanBan')),
    },

    //库存指示看板
    '/kucunzhishi': {
      component: dynamicWrapper(app, [], () => import('../routes/KuCunZhiShi/KuCunZhiShi')),
    },

    // '/user/:id': {
    //   component: dynamicWrapper(app, [], () => import('../routes/User/SomeComponent')),
    // },
  };
  // Get name from ./menu.js or just set it in the router data.
  const menuData = getFlatMenuData([]);

  // Route configuration data
  // eg. {name,authority ...routerConfig }
  const routerData = {};
  // The route matches the menu
  Object.keys(routerConfig).forEach(path => {
    // Regular match item name
    // eg.  router /user/:id === /user/chen
    const pathRegexp = pathToRegexp(path);
    const menuKey = Object.keys(menuData).find(key => pathRegexp.test(`${key}`));
    let menuItem = {};
    // If menuKey is not empty
    if (menuKey) {
      menuItem = menuData[menuKey];
    }
    let router = routerConfig[path];
    // If you need to configure complex parameter routing,
    // https://github.com/ant-design/ant-design-pro-site/blob/master/docs/router-and-nav.md#%E5%B8%A6%E5%8F%82%E6%95%B0%E7%9A%84%E8%B7%AF%E7%94%B1%E8%8F%9C%E5%8D%95
    // eg . /list/:type/user/info/:id
    router = {
      ...router,
      name: router.name || menuItem.name,
      authority: router.authority || menuItem.authority,
      hideInBreadcrumb: router.hideInBreadcrumb || menuItem.hideInBreadcrumb,
    };
    routerData[path] = router;
  });
  return routerData;
};
