import React from 'react';
import moment from 'moment';
import Clock from './Clock';
import styles from './index.less';

class MjHeader extends React.Component {

  state = {
    time: moment(),
  };

  componentDidMount() {
    this.uptimes = setInterval(this.upTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.uptimes);
  }

  upTime = () => {
    this.setState({
      time: moment(),
    });
  };

  render() {
    const { title1, title2, leftTitle1, leftTitle2, rightIcon1, rightIcon2, rightTitle1, rightTitle2 } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles.leftHead}>
          <div className={styles.leftHeader}>
            <span>当前时间：</span><Clock timeData={this.state.time}/>
          </div>
          <div className={styles.leftHeader}>
            <span>{leftTitle1}</span>
            <span>{leftTitle2}</span>
          </div>
        </div>
        <div className={styles.biaotiHeader}>
          <div className={styles.biaoHeader1}>{title1}</div>
          <div className={styles.biaoHeader1}>{title2}</div>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.rightHeader1} style={{ marginRight: '10px' }}>
            <img className={styles.headImg} src={require(`../../assets/headlog.png`)}/>
          </div>
          <div className={styles.rightHeader2}>
            <div className={styles.rightHeader3}>
              <div className={styles.rightHeader4}>
                {rightIcon1}
              </div>
              <div className={styles.rightHeader5}>
                {rightTitle1}
              </div>
            </div>
            <div className={styles.rightHeader3}>
              <div className={styles.rightHeader4}>
                {rightIcon2}
              </div>
              <div className={styles.rightHeader5}>
                {rightTitle2}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MjHeader;
