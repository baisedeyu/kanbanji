import React from 'react';
import NowTime from './Clock';
import styles from './BoardHearder.css';
import  config2  from '../../../config/config20190428';



class BoardHeader extends React.Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.getTime()
    this.timeID = setInterval(this.upTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  //获取时间
  getTime=()=>{
    fetch(`${config2.SB_TIME}/GetDateTimeForKB`,{
      method:'GET'
    }).then(res=>res.text()).then(data=>{
      const newdData = new Date(parseInt(data))
      this.setState({ time: newdData });
    })
  }

  upTime = () => {
    const time=this.state.time
    this.setState({
      time:new Date(time.getTime() + 1000)
    });
  };

  render() {
    const weekday=['星期日','星期一','星期二','星期三','星期四','星期五','星期六',]
    const {time}=this.state
    const nowData=`${time.getFullYear()}-${time.getMonth()<9 ? '0'+(time.getMonth()+1): time.getMonth()+1}-${time.getDate() < 10 ? '0'+time.getDate()
      :time.getDate()} ${time.getHours()<10 ? '0'+time.getHours() :time.getHours()}:${time.getMinutes()<10 ? '0'+time.getMinutes()
      :time.getMinutes()}:${time.getSeconds() <10 ? '0'+time.getSeconds() : time.getSeconds()} ${weekday[time.getDay()]}`

    const myHeaderName = this.props.myurl;
    const { TotalPage, pageSize } = this.props;
    let Page = ``;
    if (TotalPage !== undefined) {
      Page = `${TotalPage === 0 ? 0 : pageSize - 1}/${TotalPage}`;
    }
    return (
      <div className={styles.Boardhead} style={{ width: '100%' }}>
        <img className={styles.HeadImge1} src={require('../../assets/headlog.png')}/>
        {/*<span className={styles.banbie1}>{`班别：${banbie}`}</span>*/}
        <div className={styles.Font}>
          {`${myHeaderName} ${Page}`}
        </div>

        <div className={styles.Clock}>
          <NowTime timeData={nowData}/>
        </div>
      </div>
    );
  }
}

export default BoardHeader;
