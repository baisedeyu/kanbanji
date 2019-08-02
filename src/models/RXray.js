import {getRXray} from "../services/RXray"


export default {

  namespace: 'RXray',
  state: {
    data:[],
  },
  effects: {
    *fetch(_, {call, put}) {
      const response = yield call(getRXray);
      const data1 = response.RXray
      console.log(data1)
      yield put({
        type: 'save',
        payload: data1,
      });
    },
  },
  reducers: {
    save(state, {payload}) {
      return {state,
        data:payload };
    },
  },
};
