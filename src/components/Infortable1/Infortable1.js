import React from  'react';
import styles from './Infortable1.css';

class  Infortable1 extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className={styles.infortablebox} style={{'height':this.props.Height}}>
                <p className={styles.p_title}>{this.props.title}</p>
                <div className={`table-responsive ${styles.table_box}`}>
                    <table className={`table ${styles.sbtableinfortable}`}>
                        <thead>
                            <tr>
                                {
                                    this.props.tabledata.th.map(function (currentValue, index) {
                                        return <th key={index}>{currentValue.name}</th>
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.tabledata.tdNub==4?
                                    this.props.tabledata.td.map(function (currentValue, index) {
                                        return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{currentValue.objname}</td>
                                                <td>{currentValue.contractor}</td>
                                                <td></td>
                                            </tr>
                                        )
                                    }):
                                    this.props.tabledata.td.map(function (currentValue, index) {
                                        {
                                            return(
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{currentValue.content}</td>
                                                    <td></td>
                                                </tr>
                                            )
                                        }
                                    })
                            }
                        </tbody>

                    </table>
                </div>
                <div className={styles.handle}>
                    <a href="#">数据导出</a>
                    <a href="#">数据备份</a>
                </div>
            </div>
        )
    }
}

export  default  Infortable1;