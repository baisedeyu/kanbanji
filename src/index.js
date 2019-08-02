import '@babel/polyfill';
import 'url-polyfill';
import dva from 'dva';

import createHistory from 'history/createBrowserHistory'
// user BrowserHistory
// import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import 'moment/locale/zh-cn';
import './rollbar';

import './index.less';
// 1. Initialize
const app = dva({
  history: createHistory(),
});


// 2. Plugins
app.use(createLoading());

// 3. Register global model
app.model(require('./models/global').default);
app.model(require('./models/app').default);
app.model(require('./models/wstates').default);
app.model(require('./models/touliao').default);
app.model(require('./models/jianshi').default);
app.model(require('./models/baoZhuang').default);
app.model(require('./models/RXray').default );
app.model(require('./models/jiaGongJianChaTai').default );
app.model(require('./models/pingHengHaiLouTable').default );
app.model(require('./models/xianbieshengchan').default)
app.model(require('./models/chuqijinglian').default)
app.model(require('./models/rongjietouliao').default)
app.model(require('./models/diyazhuzao').default)
app.model(require('./models/xray').default)
app.model(require('./models/pinghenghailou').default)
app.model(require('./models/rongjielu').default)
app.model(require('./models/rechulishebei').default)
app.model(require('./models/tzAslzl').default)
app.model(require('./models/kucunmingxi').default)
app.model(require('./models/hongjian').default)
app.model(require('./models/banbie').default)
app.model(require('./models/rechulilu').default)
app.model(require('./models/dianjianzhixinghuizong').default)
app.model(require('./models/dianjianzhixingweiwancheng').default)
app.model(require('./models/baoyangzhixinghuizong').default)
app.model(require('./models/baoyangzhixingweiwancheng').default)
app.model(require('./models/guzhangweiwancheng').default)
app.model(require('./models/chao24xiaoshiweiwancheng').default)
app.model(require('./models/zhuzaoshuliangduibifenxi').default)
app.model(require('./models/shebiehuizongkanban').default)
app.model(require('./models/tzsbjk').default)
app.model(require('./models/muju').default)
app.model(require('./models/bjjt').default)
app.model(require('./models/tztz').default)
app.model(require('./models/xbdbzk').default)
app.model(require('./models/cuchexian').default)
app.model(require('./models/jtzkkb').default)
app.model(require('./models/fendi').default)
app.model(require('./models/sczk').default)
app.model(require('./models/jgsczk').default)
app.model(require('./models/fmcheckpasswp').default)
app.model(require('./models/renyuanzhuangtai').default)
app.model(require('./models/KuCunModel').default)
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store; // eslint-disable-line
