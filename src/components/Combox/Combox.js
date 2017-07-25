import React from 'react';

import styles from  './Combox.css';

class Combox extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className={styles.combox}>
                <div  className={styles.combox_left}>{this.props.Lable}:</div>
                <div className={styles.combox_right}>
                    <div className={styles.combox_down}>
                        <div className={styles.combox_down_word}>{this.props.text}</div>
                        <div className={styles.conbox_down_sling}></div>
                        <div className={styles.conbox_down_remaining}>
                            <div className="combox_down_col">监控</div>
                            <div className="combox_down_col">服务器</div>
                            <div className="combox_down_col">摄像头</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Combox;