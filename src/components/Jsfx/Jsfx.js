import  React from 'react';

import styles from './Jsfx.css';

import Combox from '../Combox/Combox.js';
let FontAwesome = require('react-fontawesome');

class Jsfx extends React.Component{
    constructor(){
        super();
        this.state={
            data:[
                {
                    sbname:'曙光路1',
                    sbtype:'监控',
                    brand:'海康威视DS-2CD6233F-SDI',
                    project:'2016期',
                    sbzt:'故障!',
                },{
                    sbname:'建国北路1',
                    sbtype:'监控',
                    brand:'海康威视DS-2CD6233F-SDI',
                    project:'2016期',
                    sbzt:'故障!',
                },{
                    sbname:'曙光路2',
                    sbtype:'监控',
                    brand:'海康威视DS-2CD876MF-FCB',
                    project:'2016期',
                    sbzt:'故障!',
                },{
                    sbname:'曙光路3',
                    sbtype:'监控',
                    brand:'海康威视DS-2CD876MF-FCB\t',
                    project:'2015期',
                    sbzt:'故障!',
                },{
                    sbname:'建国北路2',
                    sbtype:'监控',
                    brand:'海康威视DS-2CD855F-FCB',
                    project:'2015期',
                    sbzt:'故障!',
                },{
                    sbname:'建国北路3',
                    sbtype:'监控',
                    brand:'海康威视DS-2CD855F-FCB',
                    project:'2015期',
                    sbzt:'故障!',
                },{
                    sbname:'曙光路1',
                    sbtype:'监控',
                    brand:'海康威视DS-2CD6233F-SDI',
                    project:'2015期',
                    sbzt:'故障!',
                },{
                    sbname:'曙光路1',
                    sbtype:'监控',
                    brand:'海康威视DS-2CD6233F-SDI',
                    project:'2015期',
                    sbzt:'故障!',
                }
            ]
        }
    }
    render(){
        return(
            <div className={styles.jsfx}>
                <div className={styles.contentbox}>
                    <p>日志查询</p>
                    <div className="row">
                        <div className="col-md-3">
                            <Combox Lable="所属项目" text="2016期"/>
                        </div>
                        <div className="col-md-3">
                            <Combox Lable="设备类型" text="监控"/>
                        </div>
                        <div className="col-md-3">
                            <Combox Lable="品牌型号" text="不限"/>
                        </div>
                        <div className="col-md-3">
                            <Combox Lable="区域" text="城南"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Combox Lable="设备状态" text="不限"/>
                        </div>
                        <div className="col-md-3">
                            <Combox Lable="故障类型" text="CPU"/>
                        </div>
                        <div className="col-md-3">
                            <Combox Lable="起始时间" text="2016-8-20"/>
                        </div>
                        <div className="col-md-3">
                            <Combox Lable="结束时间" text="2016-8-30"/>
                        </div>
                    </div>
                    <div className={styles.searchbox}>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="请输入关键词" />
                            <span className="input-group-btn">
                              <button className="btn btn-default" type="button">搜索</button>
                            </span>
                        </div>
                    </div>
                    <div className={`table-responsive table-bordered ${styles.table_box}`}>
                        <table className={`table ${styles.sbtableinfortable}`}>
                            <thead>
                            <tr>
                                <th>序号	</th>
                                <th>设备名称</th>
                                <th>设备类型</th>
                                <th>品牌型号</th>
                                <th>所属项目</th>
                                <th>设备状态</th>
                                <th>日志</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.data.map(function(currentValue,index){
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{currentValue.sbname}</td>
                                            <td>{currentValue.sbtype}</td>
                                            <td>{currentValue.brand}</td>
                                            <td>{currentValue.project}</td>
                                            <td>{currentValue.sbzt}</td>
                                            <td><a href="#">加入对比</a></td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Jsfx;