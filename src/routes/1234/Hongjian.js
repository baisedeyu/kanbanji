import React from 'react';
import { connect } from 'dva';
import { Button, Modal, Input, Table } from 'antd';
import { routerRedux, Route, Switch, Prompt } from 'dva/router';
import './Hongjian.less';

const { TextArea } = Input;


@connect(({ hongjian }) => ({ hongjian }))
class Hongjian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myurl: '',
      visible: false,
      index: null,
    };
  }

  componentDidMount() {
    // window.onbeforeunload = function(e) {
    //   return '确认离开吗';
    // };
    // this.fullscreen()
    //  this.getimg()
    // this.geturl()
    // this.ccc()
    // this.sss()
    // window.addEventListener("popstate", ()=>{alert(213321)}, false)
  }

  componentWillUnmount() {
    window.onbeforeunload = undefined;
  }


  sss = () => {
    console.time('testTime');
    this.aaa();

  };
  aaa = () => {

    setTimeout(() => console.timeEnd('testTime'));
    new Promise((resolve) => {
      console.log('2');
      for (let i = 0; i < 10000; i++) {
        i === 9999 && resolve();
      }

    }).then(() => {
      console.log('3');
    });
    console.log(4);
  };
  test = (resolve, reject) => {
    const timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function() {
      if (timeOut < 1) {
        console.log('call resolve()...');
        resolve('200 OK');
      }
      else {
        console.log('call reject()...');
        reject('timeout in ' + timeOut + ' seconds.');
      }
    }, timeOut * 1000);
  };

  ccc = () => {
    new Promise(this.test).then(resoult => console.log('成功' + resoult)).catch(reason => console.log('失败' + reason));
  };
  geturl = () => {
    const url1 = window.document.location.href;
    this.setState({
      myurl: url1,
    });
  };

  xiugai = () => {
    const { payload } = this.props.hongjian;
    this.props.dispatch({
      type: 'hongjian/saveData',
      payload: payload + 1,
    });
  };
  zou = () => {
    this.props.history.push('/hongjian2');
  };

  render() {
    // console.log(this.props);
    console.log(this.state.index);
    const column = [
      {
        title: 'a',
        dataIndex: 'a',
      }, {
        title: 'b',
        dataIndex: 'b',
      }, {
        title: 'b',
        dataIndex: 'b',
      },
    ];

    const data = [
      {
        a: '1',
        b: '1',
        c: '1',
      }, {
        a: '2',
        b: '2',
        c: '2',
      }, {
        a: '3',
        b: '3',
        c: '3',
      },
    ];
    const { payload } = this.props.hongjian;
    return (
      <div>
        {payload}
        <Button onClick={this.xiugai}>修改</Button>
        <Button onClick={this.zou}>走</Button>
        {/*<Prompt message="老妹要走啊？" when={true}/>*/}
        <TextArea className='aaa111' rows={4} autosize={false}/>
        <Table
          columns={column}
          dataSource={data}
          pagination={false}
          onRow={(record, index) => {
            return {
              onClick: (event) => {
                this.setState({
                  index,
                });
              },
            };
          }}
          rowClassName={(record, index) => this.state.index === index ? 'dored':null}
        />
      </div>

    );
  }
}

export default Hongjian;
