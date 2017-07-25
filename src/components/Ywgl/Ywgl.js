import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Twomenu from '../Twomenu/Twomenu.js';
import Gzzstbar from  '../Gzzstbar/Gzzstbar.js';
import Sbxfgk from '../Sbxfgk/Sbxfgk.js';
import  styles from  './Ywgl.css';

class Ywgl extends React.Component{
    constructor({match}){
        super();
        console.log(match.url);
        this.state={
            match:match.url,
            twomenu:[
                {'name':'运维总览','url':`${match.url}/ywzl`},
                {'name':'故障报修','url':`${match.url}/gzbx`},
                {'name':'故障接收','url':`${match.url}/gzjs`},
                {'name':'计费统计','url':`${match.url}/jftj`},
                {'name':'运维设置','url':`${match.url}/ywset`},
            ]
        }
    }
    render(){
        return(
            <div className={styles.ywglbox}>
                <Twomenu twomenu={this.state.twomenu}/>
                <div className={styles.sub_nav}>
                    <a className={styles.active} href="#">全部</a>
                    <a href="#">2014期</a>
                    <a href="#">2015期</a>
                    <a href="#">2016期</a>
                </div>
                <div className={styles.gzzsbox}>
                    <Gzzstbar title="故障走势图"/>
                </div>
                <div className={styles.xfztbox}>
                    <Sbxfgk title="设备修复概况"/>
                </div>
            </div>
        )
    }
}
export default Ywgl;