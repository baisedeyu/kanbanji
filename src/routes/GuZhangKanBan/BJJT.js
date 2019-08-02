import React from 'react';
import { List, Button } from 'antd';
import { connect } from 'dva';
import './index.less';

@connect(({ bjjt }) => ({
  bjjt,
}))
class BJJT extends React.Component {

  componentDidMount() {
    this.getData()
    this.getDataTime=setInterval(this.getData,configs201905131052.GZSB_time)
  }

  componentWillUnmount(){
    clearInterval(this.getDataTime)
  }

  // 获取设备信息
  getData=()=>{
    this.props.dispatch({
      type: 'bjjt/getData',
    })
  }

  chakan=(params)=>{
    const url=window.location.search.substr(1).split('&')
    const data={};
    url.map(item=>{data[item.split('=')[0]]=item.split('=')[1];
    })
    const OrgId=data[`OrgID`]
    const ID=params[`ID`]
    const myurl=data['EKANServer']
    this.props.history.push(`/gzkb?ID=${ID}&OrgId=${OrgId}&EKANServer=${myurl}`)
  }

  render() {
    const { data } = this.props.bjjt;

    return (
      <div className='bjjt' style={{ width: '100%', height: `${document.body.clientHeight}px` }}>
        <List
          header={`低压机设备`}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                description={item[`DeviceDesc`]}
              />
              {
                item[`XAlertState`] === `0` ? <Button style={{height:`5vw`}} size={`large`} disabled>正常</Button> : <Button onClick={this.chakan.bind(this,item)} style={{height:`5vw`}} size={`large`} type="danger">查看</Button>
              }
            </List.Item>)}
        />
      </div>
    );
  }
}

export default BJJT;
