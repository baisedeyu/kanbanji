import React from 'react';
import { Button, List, Card } from 'antd';
import { Modal } from 'antd-mobile';
import './index.less';
import Zmage from 'react-zmage';
import SeeImg from './SeeImg';
import { connect } from 'dva';
import 'antd-mobile/dist/antd-mobile.css';


@connect(({ bjjt }) => ({
  bjjt,
}))
class GZKB extends React.Component {
  state = {
    height: document.body.clientHeight,
    img: [
      `http://pic.baike.soso.com/p/20121008/20121008095554-50976746.jpg`,
      `https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract02.jpg`,
    ],
    // imge: [
    //   `https:\/\/zmage.caldis.me/imgSet/childsDream/1.jpg`,
    //   `https://zmage.caldis.me/imgSet/childsDream/2.jpg`,
    //   `https://zmage.caldis.me/imgSet/childsDream/3.jpg`,
    //   `https://zmage.caldis.me/imgSet/childsDream/4.jpg`,
    //   `https://zmage.caldis.me/imgSet/childsDream/5.jpg`,
    //   `https://zmage.caldis.me/imgSet/childsDream/6.jpg`,
    //   `https://zmage.caldis.me/imgSet/childsDream/7.jpg`,
    //   `http://pic.baike.soso.com/p/20121008/20121008095554-50976746.jpg`,
    //   `https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract02.jpg`,
    // ],
    visible: false,
    index: 0,
  };

  componentWillMount() {
    // this.screenChange()
  }

  componentDidMount() {
    const ID = window.location.search.substr(1);
    this.props.dispatch({
      type: 'bjjt/getImg',
      ID,
    });
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.resize);

  }

  screenChange = () => {
    window.addEventListener('resize', this.resize);
  };
  resize = () => {
    this.setState({
      height: document.body.clientHeight,
    });
  };

  changIndex = () => {
    const { index, img } = this.state;
    const { ImgData } = this.props.bjjt;
    if (ImgData.length === index + 1) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: index + 1,
      });
    }
  };
  changIndex1 = () => {
    const { index, img } = this.state;
    const { ImgData } = this.props.bjjt;
    if (index === 0) {
      this.setState({
        index: ImgData.length-1,
      });
    } else {
      this.setState({
        index: index - 1,
      });
    }
  };

  goback = () => {
    console.log(this.props.history.goBack());
  };

  render() {
    const { height, img, index } = this.state;
    const { ImgData } = this.props.bjjt;
    let set = [];
    ImgData.map(item => {
      set.push({ src: `${item[`PictureUrl`]}` });
    });

    return (
      <div style={{ width: '100%', height: `${height}px` }} className={`gzkb`}>
        <div style={{ height: `60px` }}/>
        <div style={{
          width: '100%',
          padding: '12px 24px',
          position: `fixed`,
          top: '0px',
          zIndex: 999,
          background: '#ffffff',
          border: `1px solid #d9d9d9`,
          marginBottom: '6px',
        }}>
          <div
            style={{ float: 'left', position: 'absolute', top: '50%', transform: `translateY(-50%)` }}>{`Xray照片`}</div>
          <div style={{ float: 'right' }}>
            <Button onClick={this.goback} style={{ width: '200px' }} type={`primary`}>返 回</Button>
          </div>
        </div>

        <List
          grid={{
            gutter: 4,
            xs: configs201905131052.sbimge,
            sm: configs201905131052.sbimge,
            md: configs201905131052.sbimge,
            lg: configs201905131052.sbimge,
            xl: configs201905131052.sbimge,
          }}
          bordered
          dataSource={ImgData}
          renderItem={(item, index) => (
            <List.Item>
              <Card>
                <img
                  src={item[`PictureUrl`]}
                  // src={item}
                  style={{ width: `100%`, height: 'auto' }}
                  onClick={() => this.setState({
                    visible: true,
                    index
                  })}

                  // set={set}
                  // defaultPage={index}
                  // controller={{
                  //   pagination: false,
                  // }}
                />
              </Card>
            </List.Item>
          )}
          // footer={<div style={{ textAlign: `center` }}><Button onClick={this.goback} style={{ width: '200px' }} type={`primary`}>返 回</Button></div>}
        />
        <Modal visible={this.state.visible}>
          <SeeImg
            img={ImgData}
            index={index}
            changIndex={this.changIndex}
            changIndex1={this.changIndex1}
            close={()=>this.setState({visible:false})}
          />
        </Modal>
      </div>
    );
  }
}

export default GZKB;
