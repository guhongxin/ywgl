import React from 'react';
let FontAwesome = require('react-fontawesome');

import styles from  './Sbxfgk.css';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入饼图
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Sbxfgk extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        let myChart1 = echarts.init(document.getElementById('sbxfgkPiebox1'));
        let option1 = {
            title:{
                show:true,
                text:'故障修复率',
                left:'center',
                top:'center',
                textStyle:{
                    color:'#ffffff',
                    fontSize:14,
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color:['#66EE87','#9BF26F','#66DAC2','#F1CF63'],
            series: [
                {
                    name:'故障修复率',
                    type:'pie',
                    radius: ['35%', '60%'],
                    avoidLabelOverlap: false,
                    center:['50%','50%'],
                    label: {
                        normal: {
                            show: true,
                            position: 'outside',
                            formatter:'{b}:{d}%'
                        },
                        emphasis: {

                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length:15,
                            length2:10,
                        },
                        emphasis:{
                        }
                    },
                    data:[
                        {value:400, name:'已修复'},
                        {value:200, name:'维修复'}
                    ]
                }
            ]
        };
        // 绘制图表
        myChart1.setOption(option1);
        let myChart2 = echarts.init(document.getElementById('sbxfgkPiebox2'));
        myChart2.setOption(option1);
    }
    render(){
        return(
            <div className={styles.sbxfgkbox}>
                <div className={styles.sbxfgk_title}>
                    <p>
                        <span>{this.props.title}</span>
                        <FontAwesome
                            className='fa fa-line-chart'
                            name='line-chart'
                            size='lg'
                            style={{'marginLeft':'20px','color':'#ffffff','float':'right','lineHeight':'30px'}}
                        />
                    </p>
                </div>
                <div className="row" style={{'marginLeft':'15px','marginRight':'15px'}}>
                    <div className="col-md-6">
                        <div id="sbxfgkPiebox1" className={styles.sbxfgkPiebox}></div>
                    </div>
                    <div className="col-md-6">
                        <div id="sbxfgkPiebox2" className={styles.sbxfgkPiebox}></div>
                    </div>
                </div>
            </div>
        )
    }
}
export  default  Sbxfgk;