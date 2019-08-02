import React from 'react';
import styles from './BoardFoot.css'

class BoardFoot extends React.Component{

  render(){
    const {WelCome,Copyright}=this.props

    return(
      <div  className={styles.Foot}>
        <div className={styles.div1}>
          {/*<div className={styles.marquee}>*/}
          {/*<marquee height="100%" behavior="scroll" direction="right" >*/}
          {/*/!*{WelCome}1111*!/*/}
          {/*</marquee>*/}
          {/*</div>*/}

        </div>
        <div className={styles.div2} >
          <span style={{position:'relative', top:'0%', color:'white',fontSize:'1.4vw',right:'10%'}}>
            All Right @Foryoutech 2018
          </span>
        </div>
      </div>
    )
  }
}
export default BoardFoot;
