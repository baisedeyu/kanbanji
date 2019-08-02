import { getZuBie, getRYZT } from '../services/shebeiguanli'
export default {
    namespace: 'renyuanzhuangtai',
    state: {
        Point: [],
        KX: 0,
        ZB: 0,
        RS: 0,
        DQZB: 0,
        tableData: [],
        Point_Page: 0,
        TABLE_PAGE:0
    },
    effects: {
        // 获取点
        *fetchPoint({ payload }, { call, put }) {
            const response = yield call(getZuBie,payload)
            let Point = []
            const Point_Page = 0
            const TABLE_PAGE=0
            if (response !== "") {
                Point = response.split(':')[1].split(',')
            }
            //申请数据
            if (Point.length !== 0) {
                yield put({
                    type: 'fetchTable',
                    nowPoint: Point[Point_Page],
                    Point_Page,TABLE_PAGE,
                })
            }
            //保存点和当前点
            yield put({
                type: "savePoint",
                Point, Point_Page
            })
        },
        *fetchTable({ nowPoint, Point_Page,TABLE_PAGE }, {select, call, put }) {
            const ORGID=yield select(state=>state.shebeihuizongkanban.params.OrgID)
            const response = yield call(getRYZT, nowPoint,ORGID)
            let KX = null
            let DQZB = null
            let ZB = null
            let RS = null
            let tableData = []
            if (response.IsSuccess) {
                KX = response.Msg
                DQZB = response.TotalCount
                if (response.data.length !== 0) {
                    ZB = response.data[0].GROUPNM
                    RS = response.data[0].TotalNum
                    tableData = response.data
                }
                yield put({
                    type: 'saveData',
                    KX, DQZB, ZB, RS, tableData, Point_Page,TABLE_PAGE
                })
            } else {
                KX = 0
                DQZB = response.TotalCount
                ZB = ''
                RS = 0
                yield put({
                    type: 'saveData',
                    KX, DQZB, ZB, RS, tableData, Point_Page,TABLE_PAGE
                })
            }
        }
    },
    reducers: {
        savePoint(state, { Point, Point_Page }) {
            return {
                ...state,
                Point, Point_Page
            }
        },
        saveData(state, { KX, DQZB, ZB, RS, tableData, Point_Page,TABLE_PAGE }) {
            return {
                ...state,
                KX, DQZB, ZB, RS, tableData, Point_Page,TABLE_PAGE
            }
        },
        upTABLE_PAGE(state,{TABLE_PAGE}){
            return{
                ...state,
                TABLE_PAGE
            }
        },
    }
}