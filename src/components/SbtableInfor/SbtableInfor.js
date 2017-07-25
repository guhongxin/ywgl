import React from 'react';

import styles from './SbtableInfor.css';

class SbtableInfor extends React.Component{
    constructor(){
        super();
        this.state={
            data:[
                {
                    sbname:'卡口服务器1',
                    project:'2016期',
                    brand:'海康威视',
                    gztime:'2016年8月30日 18:00',
                    jcqk:'正常',
                    gjxx:'无',
                },{
                    sbname:'卡口服务器2',
                    project:'2016期',
                    brand:'海康威视',
                    gztime:'2016年8月30日 19:00',
                    jcqk:'不通',
                    gjxx:'CPU 99%',
                },{
                    sbname:'卡口服务器3',
                    project:'2015期',
                    brand:'海康威视',
                    gztime:'2016年8月30日 18:00',
                    jcqk:'正常',
                    gjxx:'无',
                },{
                    sbname:'存储服务器1',
                    project:'2015期',
                    brand:'大华',
                    gztime:'2016年8月30日 18:00',
                    jcqk:'不通',
                    gjxx:'CPU 99%',
                },{
                    sbname:'存储服务器2',
                    project:'2014期',
                    brand:'大华',
                    gztime:'2016年8月30日 18:00',
                    jcqk:'正常',
                    gjxx:'无',
                },{
                    sbname:'存储服务器3',
                    project:'2014期',
                    brand:'大华',
                    gztime:'2016年8月30日 19:00',
                    jcqk:'不通',
                    gjxx:'CPU 99%',
                }
            ]
        }
    }
    render(){
        return(
            <div className={styles.sbtableinfor}>
                <div className={styles.sbqh} >
                    <span className={styles.spanactive}>全部设备</span>
                    <span>故障设备</span>
                </div>
                <div className={`table-responsive table-bordered ${styles.table_box}`}>
                    <table className={`table ${styles.sbtableinfortable}`}>
                        <thead>
                            <tr>
                                <th>设备名称</th>
                                <th>项目</th>
                                <th>品牌</th>
                                <th>故障时间</th>
                                <th>进程情况</th>
                                <th>告警信息</th>
                                <th>日志信息</th>
                            </tr>
                       </thead>
                        <tbody>
                        {
                            this.state.data.map(function(currentValue,index){
                                return(
                                    <tr key={index}>
                                        <td>{currentValue.sbname}</td>
                                        <td>{currentValue.project}</td>
                                        <td>{currentValue.brand}</td>
                                        <td>{currentValue.gztime}</td>
                                        <td>{currentValue.jcqk}</td>
                                        <td>{currentValue.gjxx}</td>
                                        <td><a href="#">查看详情</a></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default SbtableInfor;