import React from 'react'
import Mock from 'mockjs'
import axiosrequest from '../../utils/axiosrequest';
import {
  Row,
  Col,
  Card,
  Select,
  Input,
  Button,
} from 'antd'
import styles from './index.less'

/*
const { api } = config
const {
  dashboard, users, userLogin, user, v1test, v2test,
} = api
*/
const requestOptions = [
  {
    url: 'http://api.asilu.com/weather/',
    desc: 'cross-domain request, but match config.baseURL(./src/utils/config.js)',
  },
  {
    url: 'http://192.168.99.19/EKanService/EKanService.svc/GetJsonResult?name=test&address=123&phone=123456',
    desc: ' Get JSON DEMO',
  },
  {
    url: 'http://www.zuimeitianqi.com/zuimei/queryWeather',
    data: {
      cityCode: '01010101',
    },
  },

  /*
  {
    url: 'http://192.168.99.19/mouldService/FOnwipRes.svc/getCoolData?strMouldNo=801100001&OrgId=118',
    desc: 'Get GEtCoolData',
  },  */
  ]

export default class RequestPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currntRequest: requestOptions[0],
      method: 'get',
      result: '',
    }
  }
  componentDidMount () {
    this.handleRequest()
  }

  handleRequest = () => {
    const { currntRequest } = this.state
    const { desc, ...requestParams } = currntRequest
    currntRequest.method='get'
    this.setState({
      ...this.state,
      result: <div key="sending">
        请求中<br />
        url:{currntRequest.url}<br />
        method:{currntRequest.method}<br />
        params:{currntRequest.data ? JSON.stringify(currntRequest.data) : 'null'}<br />
      </div>,
    })
    axiosrequest({...requestParams}).then((data) => {
      const { state } = this
     state.result = [this.state.result, <div key="complete"><div>请求完成</div>{JSON.stringify(data)}</div>]
     // state.result = [this.state.result, <div key="complete"><div>请求完成</div>{JSON.stringify(data.parseJSON())}</div>]
      this.setState(state)
    })
  }

  handeleURLChange = (value) => {
    const { state } = this;
    const curretUrl = value.split('?')[0];
    const curretMethod = value.split('?')[1];
    const currntItem = requestOptions.filter((item) => {
      const { method = 'get' } = item;
      return curretUrl === item.url && curretMethod === method
    });
    const [currntRequest] = currntItem;
    state.currntRequest = currntRequest;
    this.setState(state)
  };

  render () {
    const colProps = {
      lg: 12,
      md: 24,
    };
    const { result, currntRequest } = this.state;
    const { method = 'get' } = currntRequest;

    return (
      <div className="content-inner">
        <Row gutter={32}>
          <Col {...colProps}>
            <Card title="Request"
              style={{
                overflow: 'visible',
              }}
            >
              <div className={styles.option}>
                <Select
                  style={{
                    width: '100%',
                    flex: 1,
                  }}
                  defaultValue={`${method.toLocaleUpperCase()}   ${requestOptions[0].url}`}
                  size="large"
                  onChange={this.handeleURLChange}
                >
                  {requestOptions.map((item, index) => {
                    const m = item.method || 'get'
                    return (<Select.Option key={index} value={`${item.url}?${m}`}>
                      {`${m.toLocaleUpperCase()}    `}{item.url}
                    </Select.Option>)
                  })}
                </Select>
                <Button type="primary" style={{ width: 100, marginLeft: 16 }} onClick={this.handleRequest}>发送</Button>
              </div>
              <div className={styles.params}>
                <div className={styles.label}>Params：</div>
                <Input disabled value={currntRequest.data ? JSON.stringify(currntRequest.data) : 'null'} size="large" style={{ width: 200 }} placeholder="null" />
                <div style={{ flex: 1, marginLeft: 16 }}>{currntRequest.desc}</div>
              </div>
              <div className={styles.result}>
                {result}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
