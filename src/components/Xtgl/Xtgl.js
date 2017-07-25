import React from 'react';

import Twomenu from '../Twomenu/Twomenu.js';
import Infortable1 from '../Infortable1/Infortable1.js';
import  styles from './Xtgl1.css';

class Xtgl extends React.Component{
    constructor({match}){
        super();
        console.log(match);
        this.state={
            match:match.url,
            twomenu:[
                {'name':'设备管理','url':`${match.url}/sbgl`},
                {'name':'用户管理','url':`${match.url}/usergl`},
                {'name':'日报管理','url':`${match.url}/rbgl`},
            ],
            tabledata:{

                tabledata1:{
                       th:[
                            {'name':'序号'},
                            {'name':'项目名称'},
                            {'name':'承建商'},
                            {'name':'操作'},
                       ],
                       tdNub:4,
                       td:[
                            {'objname':'2014期','contractor':'广电'},
                            {'objname':'2015期','contractor':'移动'},
                            {'objname':'2016期','contractor':'电信'},
                        ]
                },
                tabledata2:{
                    th:[
                        {'name':'序号'},
                        {'name':'所属公司'},
                        {'name':'操作'},
                    ],
                    tdNub:3,
                    td:[
                        {'content':'海康公司'},
                        {'content':'大华公司'},
                    ]
                },
                tabledata3:{
                    th:[
                        {'name':'序号'},
                        {'name':'所属公司'},
                        {'name':'操作'},
                    ],
                    tdNub:3,
                    td:[
                        {'content':'海康公司'},
                        {'content':'大华公司'},
                    ]
                },
            },
        }
    }
    render(){
        return(
            <div className={styles.xtglbox}>
                <Twomenu twomenu={this.state.twomenu}/>
                <div className={styles.Modularone}>
                    <div className="row">
                        <div className="col-md-4">
                            <Infortable1 title="项目管理" tabledata={this.state.tabledata.tabledata1} Height="500px" />
                        </div>
                        <div className="col-md-4">
                            <Infortable1 title="所属公司" tabledata={this.state.tabledata.tabledata2} Height="500px"/>
                        </div>
                        <div className="col-md-4">
                            <Infortable1 title="设备类型" tabledata={this.state.tabledata.tabledata3} Height="500px"/>
                        </div>
                    </div>
                </div>
                <div className={styles.Modularthree}>

                </div>
                <div className={styles.Modularfour}>
                </div>
            </div>
        )
    }
}
export  default Xtgl;