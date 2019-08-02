import React from 'react';
import BaStates from '../../components/MyBoardStateTable/MyBoardStateTable';
import { connect } from 'dva';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';

@connect(({ wstates }) => ({
  wstates,
}))
class CrewState extends React.Component {

  constructor(props){
    super(props);
    this.state={
      myurl:'',
    }
  }
  componentWillMount() {

    const { dispatch } = this.props;
    dispatch({
      type: 'wstates/fetchBasic',
    });
  }
  componentDidMount(){
     // this.fullscreen()
     //  this.getimg()
    this.geturl()
  }
  geturl=()=>{
    const url1=window.document.location.href
    this.setState({
      myurl:url1,
    })
  }
  fullscreen = () => {
    let full = this.refs.fullscreen;
    this.launchIntoFullscreen(full);

  };
  launchIntoFullscreen = (element) => {
    console.log('子组件的全屏')
    if (element.requestFullscreen) {
      element.requestFullscreen();
      console.log('11')
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
      console.log('22')
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
      console.log('33')
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
      console.log('44')
    }
  };
  getimg(){
    const img=new Image();
    this.refs.fullscreen.appendChild(img)
      }
  render() {

    const { wstates } = this.props;
    const  {mydata}  = wstates;
    console.log(JSON.stringify(mydata.length));

    // const ydata=mydata.data
    // console.log(ydata)
    // console.log(JSON.stringify(data))
    return (

      <div ref='fullscreen' style={{ height: '100%', width: '100%' }}>
        <BoardHeader myurl={this.state.myurl} />
        <BaStates scalarsd1={mydata} />
        <BoardFoot />
      </div>
    );
  }
}

export default CrewState;
