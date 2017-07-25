import  React from 'react';

import styles from './Timexz.css';



class Timexz extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className={styles.timexzbox}>
                <a href="#">周</a>
                <a href="#">15日</a>
                <a href="#">月</a>
                <a href="#">自定义</a>
            </div>
        )
    }
}
export  default Timexz;