import React from 'react';
import { Route, Switch } from 'dva/router';
import { connect } from 'dva';
import BoardFoot from '../../components/BoardFoot/BoardFoot';

import gzwxwwc from './Guzhangweiwancheng';
import c24xswwc from './Chao24xiaoshiweiwancheng';
import byzxhz from './Baoyangzhixinghuizong';
import byzxwwc from './Baoyangzhixingweiwancheng';
import djzxhz from './DianJianZhiXingHuiZong';
import djzxwwc from './DianJianZhiXingWeiWanCheng';
import ryztylb from './Renyuanzhuangtai'


@connect(({ shebeihuizongkanban }) => ({
  shebeihuizongkanban,
}))
class SheBeiZong extends React.Component {

  componentWillMount() {

    this.props.dispatch({
      type: 'shebeihuizongkanban/geturl',
    });
  }

  render() {
    const urlroute = (
      <Switch>
        <Route path="/zsbkb/gzwxwwc" component={gzwxwwc}/>
        <Route path="/zsbkb/c24xswwc" component={c24xswwc}/>
        <Route path="/zsbkb/byzxhz" component={byzxhz}/>
        <Route path="/zsbkb/byzxwwc" component={byzxwwc}/>
        <Route path="/zsbkb/djzxhz" component={djzxhz}/>
        <Route path="/zsbkb/djzxwwc" component={djzxwwc}/>
        <Route path="/zsbkb/ryztylb" component={ryztylb}/>
      </Switch>
    );
    return (
      <div style={{ height: '100%', backgroundColor: '#2d1818' }}>
        {/*<BoardHeader myurl={headname}/>*/}
        {/*<br/>*/}
        {/*<hr style={{*/}
        {/*paddingLeft: '0.2%',*/}
        {/*paddingRight: '0.2%',*/}
        {/*position: 'relative',*/}
        {/*top: '5px',*/}
        {/*border: 'none',*/}
        {/*borderTop: '1px solid white',*/}
        {/*}}/>*/}
        {/*<div style={{ height: '84%', width: '100%', position: 'relative' }}>*/}
        <div style={{ height: `95%` }}>
          {urlroute}
        </div>

        {/*</div>*/}
        <BoardFoot/>
      </div>
    );
  }
}

export default SheBeiZong;
