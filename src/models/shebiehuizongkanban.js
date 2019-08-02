import { routerRedux } from 'dva/router';
import { getUrl } from '../services/shebeiguanli';


export default {
  namespace: 'shebeihuizongkanban',
  state: {
    myurl: '',
    urlIndex: -1,
    params: {},
    yemiancanshu: {},
    isFirstLoading: true,
  },
  effects: {
    * geturl(_, { select, call, put }) {
      const url = window.location.search.substr(1).split('&');
      const params = {};
      let myurl = '';
      if (window.location.search !== '') {
        url.map(item => {
          params[item.split('=')[0]] = item.split('=')[1];
        });
        myurl = params['EKANServer'];
        yield put({
          type: 'saveParams',
          params, myurl,
        });
      }
      let urlIndexs = yield select(state => state.shebeihuizongkanban.urlIndex);
      const value = yield select(state => state.shebeihuizongkanban.params);
      const response = yield call(getUrl, value);
      if (response.IsSuccess) {
        const url = [];
        const yemiancanshu = {};
        response.data.map(item => {
          url.push(item['datafile']);
          yemiancanshu[item.datafile] = item;
        });
        if (urlIndexs === url.length - 1) {
          urlIndexs = 0;
        } else {
          urlIndexs += 1;
        }
        yield put({
          type: 'saveurl',
          payload: urlIndexs,
          yemiancanshu,
        });
        const u = url[urlIndexs];
        yield put(
          routerRedux.push(u),
        );

      }

    },

  },
  reducers: {
    saveurl(state, { payload, yemiancanshu }) {
      return {
        ...state,
        urlIndex: payload,
        yemiancanshu,
      };
    },
    saveParams(state, { params, myurl }) {
      return {
        ...state,
        params,
        myurl,
      };
    },
  },
};
