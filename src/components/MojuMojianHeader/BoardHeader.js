import React from 'react';
import NowTime from './Clock';
import styles from './BoardHearder.css';
import { connect } from 'dva';


@connect(({ banbie }) => ({
  banbie,
}))

class BoardHeader extends React.Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'banbie/fetchData1',
      changeTime: this.changeTime,
    });
    this.timeID = setInterval(this.upTime, 1000);

  }

  changeTime = (date) => {

    const ddd = date.substr(6, 13);
    const newdData = new Date(parseInt(ddd));
    this.setState({ time: newdData });
  };

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  upTime = () => {
    const time = this.state.time;
    this.setState({
      time: new Date(time.getTime() + 1000),
    });
  };

  render() {
    const weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const { time } = this.state;
    const nowData = `${time.getFullYear()}-${time.getMonth() < 9 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1}-${time.getDate() < 10 ? '0' + time.getDate()
      : time.getDate()} ${time.getHours() < 10 ? '0' + time.getHours() : time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes()
      : time.getMinutes()}:${time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()} ${weekday[time.getDay()]}`;
    const myHeaderName = this.props.myurl;
    const { banbie } = this.props.banbie;
    return (
      <div className={styles.Boardhead} style={{ width: '100%' }}>
        <img className={styles.HeadImge1} src={require('../../assets/headlog.png')}/>
        <span className={styles.banbie1}>{`正在模检:${this.props.myHeaderName}套`}</span>
        <div className={styles.Font}>
          {myHeaderName}
        </div>
        <div className={styles.Clock}>
          <NowTime timeData={nowData}/>
        </div>
      </div>
    );
  }
}

export default BoardHeader;
