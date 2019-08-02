import {getPingHengHaiLouTable} from "../services/example"
import {touLiao} from "../services/example"


export default {

  namespace: 'pingHengHaiLouTable',

  state: {
    mytabledata:[],
  },

  effects: {
    *fetch(_, {call, put}) {
      const response = yield call(getPingHengHaiLouTable);
      const  data = response.pingHengHaiLouTable;
      console.log(response)
      yield put({
        type: 'save',
        payload: data,
      });
    },
  },

  reducers: {
    save(state, {payload}) {
      return { ...state,
        mytabledata:payload };

    },
  },
};
