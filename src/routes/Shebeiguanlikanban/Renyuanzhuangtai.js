import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Row } from 'antd';
import BoardHeader from '../../components/BoardHeader3/BoardHeader';
import './Renyuanzhuangtai.less'


const pageSize=8
@connect(({ renyuanzhuangtai, shebeihuizongkanban }) => ({ renyuanzhuangtai, shebeihuizongkanban }))
class Renyuanzhuangtai extends Component {
    state = {
        pageSize: RYZT_count
    }

    componentDidMount() {
        this.getPortZuBie()
        const location = this.props.location.pathname;
        const params = this.props.shebeihuizongkanban.yemiancanshu
        const time = parseInt(params[location][`showtime`]) * 1000
        this.timer = setInterval(this.upTabeleData, time)
        // this.timer = setInterval(this.upTabeleData, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }


    upTabeleData = () => {
        // const {pageSize}=this.state
        // 表格数据
        const { tableData, Point, Point_Page, TABLE_PAGE } = this.props.renyuanzhuangtai
        const totalTablePage = Math.ceil(tableData.length / pageSize)
        if (TABLE_PAGE + 1 < totalTablePage) {
            this.props.dispatch({
                type: 'renyuanzhuangtai/upTABLE_PAGE',
                TABLE_PAGE: TABLE_PAGE + 1
            })
        } else {
            if (Point_Page + 1 < Point.length) {
                this.props.dispatch({
                    type: "renyuanzhuangtai/fetchTable",
                    nowPoint: Point[Point_Page + 1],
                    Point_Page: Point_Page + 1,
                    TABLE_PAGE: 0
                })
            } else {
                this.props.dispatch({
                    type: 'shebeihuizongkanban/geturl',
                  });
            }

        }
    }
    getPortZuBie = () => {
        this.props.dispatch({
            type: 'renyuanzhuangtai/fetchPoint',
            payload: this.props.shebeihuizongkanban,
        })
    }

    render() {
        const { KX, ZB, RS, DQZB, tableData, TABLE_PAGE } = this.props.renyuanzhuangtai
        // const {pageSize}=this.state
        const messageDiv = (key, value) => {
            return (
                <span style={{ color: 'white', fontSize: '37px', marginLeft: '10px', marginRight: "120px" }}>
                    {`${key}: ${value}`}
                </span>
            )
        }

        const column = [
            {
                title: '姓名',
                dataIndex: 'EMPLNAME',
                width: '10%',
                align: "center",
                render:(text)=>text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> : text,
            }, {
                title: '上班时间',
                dataIndex: 'ShangBanTime',
                width: '13%',
                align: "center",
                render: (text, record) =>{
                    const obj={
                        children:text === undefined ? <div style={{ visibility: 'hidden' }}>1</div> :text,
                        props:{
                            style:{
                                height:"6.0vh"
                            }
                        }
                    }
                    return obj
                },
            }, {
                title: '当前状态',
                width: '15%',
                dataIndex: 'EMPSTATE',
                align: "center",
            }, {
                title: '工作内容',
                dataIndex: 'DJWXBYList',
                render:(text)=>{
                    return{
                        children:text,
                        props:{
                            style:{
                                fontSize:'2.8vh'
                            }
                        }
                    }
                }
            }
        ]

        let nowTableData = []
        if (tableData.length > 0) {
            nowTableData = tableData.slice(TABLE_PAGE * pageSize, (TABLE_PAGE + 1) * pageSize)
        }

        const count2=nowTableData.length
        for(let x=0;x<pageSize;x++){
            if(x<count2){
                nowTableData[x]["key"]=`${x}keys`
            }else{
                nowTableData.push({
                    key:`${x}keys`
                })
            }
        }

        const location = this.props.location.pathname;
        const headnames = this.props.shebeihuizongkanban.yemiancanshu;
        const headnamesCount = Object.keys(headnames).length;
        const headname = headnamesCount === 0 ? '' : headnames[location]['title'];
        return (
            <div style={{ height: '100%', backgroundColor: '#2d1818' }}>
                <BoardHeader myurl={headname} />
                {/* <BoardHeader myurl={"人员状态一览表"} /> */}
                <br />
                <hr style={{
                    paddingLeft: '0.2%',
                    paddingRight: '0.2%',
                    border: 'none',
                    borderTop: '2px solid white',
                }} />
                <Row style={{ marginBottom: "10px" }}>
                    {messageDiv("组别", ZB)}
                    {messageDiv("人数", RS)}
                    {messageDiv("当前在班", `${DQZB}人`)}
                    {messageDiv("当前空闲", `${KX}人`)}
                </Row>
                <Table dataSource={nowTableData} className="Renyuanzhuangtai" columns={column} pagination={false} bordered />
            </div>
        );
    }
}

export default Renyuanzhuangtai;