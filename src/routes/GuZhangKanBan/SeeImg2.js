import React from 'react';
import './index.less'
class SeeImg extends React.Component {

    prev = () => {
        this.props.changIndex1()
    }
    next = () => {
        this.props.changIndex()
    }
    render() {
        const { img, index } = this.props;
        return (
            <div style={{ width: '100%', height: '100%' }}>
                {/* <div id="zmageControl" className="close" onClick={()=>this.props.close()}>
            <span style={{fontSize:'40px'}}>&times;</span>
            <button style={{height:'30px'}}>X</button> */}
                {/* <div id="zmageControlClose" className="close__1CIE0 show__3aHOc"> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path
                d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
            </svg> */}
                {/* </div> */}
                {/* </div> */}
                <div style={{ zIndex: 1000 }}>
                    <button onClick={() => this.props.close()} style={{
                        position: "absolute",
                        right: "70px",
                        top: "50px",
                        width: "45px",
                        height: "45px",
                        zIndex: 1000,
                        textAlign: 'center',
                        verticalAlign: "center",
                        fontSize: '30px',
                        color: "black",
                        fontWeight: '600',
                        borderRadius: '22px',
                        border: 'none',
                        opacity: 0.8,
                        paddingBottom: '5px'
                    }}>&times;</button>
                </div>

                <img src={`${img[index][`FILEURL`]}`} style={{
                    width: '99%',
                    height: '90%',
                    position: 'absolute',
                    top: '55%',
                    left: '5px',
                    transform: `translateY(-50%)`,
                }} />
                <div className='leftIcon' style={{ left: '80px' }} onClick={this.prev}>
                    {/* <svg style={{ width: '3rem', height: '3rem', display: 'block' }} viewBox="0 0 24 24">
                        <path
                            d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z" />
                    </svg> */}
                    <button style={{
                        fontSize: '30px',
                        color: "black",
                        fontWeight: '600',
                        borderRadius: '22px',
                        border: 'none',
                        opacity: 0.8,
                        paddingBottom: '7px',
                        width: "45px",
                        height: "45px",
                    }}>
                        &lt;
                    </button>
                </div>
                <div style={{ right: '80px' }} className='leftIcon' onClick={this.next}>
                    <button style={{
                        fontSize: '30px',
                        color: "black",
                        fontWeight: '600',
                        borderRadius: '22px',
                        border: 'none',
                        opacity: 0.8,
                        paddingBottom: '7px',
                        width: "45px",
                        height: "45px",
                    }}>
                        &gt;
                    </button>

                    {/* <svg style={{ width: '3rem', height: '3rem', display: 'block' }} viewBox="0 0 24 24">
                        <path
                            d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z" />
                    </svg> */}
                </div>
            </div>
        );
    }
}

export default SeeImg;
