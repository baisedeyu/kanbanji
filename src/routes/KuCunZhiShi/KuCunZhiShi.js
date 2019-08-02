import React, { Component } from 'react';
import BoardHeader from '../../components/BoardHeader/BoardHeader';
import BoardFoot from '../../components/BoardFoot/BoardFoot';
import KuCun from '../../components/KuCunchengpinzhishi/KuCun'
import { connect } from 'net';

class KuCunZhiShi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myurl: '山东六丰成品库存——库存指示看板',
            myHeaderName: '早班',
        };
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%', backgroundColor: '#2d1818' }}>
                <BoardHeader myurl={this.state.myurl} myHeaderName={this.state.myHeaderName} />
                <br />
                <hr style={{
                    paddingLeft: '0.2%',
                    paddingRight: '0.2%',
                    position: 'relative',
                    top: '5px',
                    border: 'none',
                    borderTop: '1px solid white',
                }} />
                <div style={{ height: '84%', width: '100%', position: 'relative', padding: '5px 30px' }}>
                    <KuCun />
                </div>
                <BoardFoot />
            </div>
        );
    }
}

export default KuCunZhiShi;