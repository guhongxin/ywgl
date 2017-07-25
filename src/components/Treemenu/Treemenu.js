import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import  styles from './Treemenu.css';

class Treemenu extends React.Component{
    constructor(){
        super();
    }
    render(){
        let url=this.props.url;
        console.log(url);
        return(
            <div className={styles.treeMenu}>
                <ul>
                    <li><Link to={`${url}/sszt`} >实时状态</Link></li>
                    <li><Link to={`${url}/gzgj`}>故障告警</Link></li>
                    <li><Link to={`${url}/gzyc`}>故障预测</Link></li>
                </ul>
            </div>
        )
    }
}



export default  Treemenu;