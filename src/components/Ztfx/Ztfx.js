import React from 'react';

import styles from './Ztfx.css';
import  Piebox from '../Piebox/Piebox.js';
import  SbtableInfor from  '../SbtableInfor/SbtableInfor';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class Ztfx extends React.Component{
    constructor(){
        super();
        this.state={
            fx:[
                {'yw_name':'sszt','zh_name':'实时分析'},
                {'yw_name':'gzgj','zh_name':'故障告警'},
                {'yw_name':'gzyc','zh_name':'故障预测'}
            ]
        }
    }

    render(){
        let match=this.props.match;
        let _title=this.state.fx.filter(function(currentValue){
            return currentValue.yw_name===match.params.id;
        });
        return(
            <div className={styles.ztfx}>
                <p className={styles.p_title}>{_title[0].zh_name}</p>
                {
                    _title[0].zh_name==='实时分析'?<Route path={match.url} component={Piebox1}/>:''
                }
                {
                    _title[0].zh_name==='故障告警'?<Route path={match.url} component={Piebox2}/>:''
                }
                {
                    _title[0].zh_name==='故障预测'?<Route path={match.url} component={Piebox3}/>:''
                }
                <SbtableInfor />
            </div>
        )
    }
}
const Piebox1=({match})=> {
    let fx=[
        {'yw_name':'sszt','zh_name':'实时分析'},
        {'yw_name':'gzgj','zh_name':'故障告警'},
        {'yw_name':'gzyc','zh_name':'故障预测'}
    ]
    let _title=fx.filter(function(currentValue){
        return match.url.indexOf(currentValue.yw_name);
    });
    return(
        <div className='row'>
            <div className="col-md-4"><Piebox idIndex={`${_title[0].yw_name}0`} title="按项目分类"/></div>
            <div className="col-md-4"><Piebox idIndex={`${_title[0].yw_name}1`} title="按品牌分类"/></div>
            <div className="col-md-4"><Piebox idIndex={`${_title[0].yw_name}2`} title="按类型分类"/></div>
        </div>
    )
};
const Piebox2=({match})=>{
        let fx=[
            {'yw_name':'sszt','zh_name':'实时分析'},
            {'yw_name':'gzgj','zh_name':'故障告警'},
            {'yw_name':'gzyc','zh_name':'故障预测'}
        ];
        let _title=fx.filter(function(currentValue){
            return match.url.indexOf(currentValue.yw_name);
        });

        return (
            <div className='row'>
                <div className="col-md-6"> <Piebox idIndex={`${_title[0].yw_name}0` } title="按项目分类"/></div>
                <div className="col-md-6"> <Piebox idIndex={`${_title[0].yw_name}1`} title="按告警分类"/></div>
            </div>
        )
};
const Piebox3=({match})=>{
    let fx=[
        {'yw_name':'sszt','zh_name':'实时分析'},
        {'yw_name':'gzgj','zh_name':'故障告警'},
        {'yw_name':'gzyc','zh_name':'故障预测'}
    ];
    let _title=fx.filter(function(currentValue){
        return match.url.indexOf(currentValue.yw_name);
    });

    return (
        <div className='row'>
            <div className="col-md-6"> <Piebox idIndex={`${_title[0].yw_name}0` } title="按项目分类"/></div>
            <div className="col-md-6"> <Piebox idIndex={`${_title[0].yw_name}1`} title="按告警分类"/></div>
        </div>
    )
};
export default Ztfx;