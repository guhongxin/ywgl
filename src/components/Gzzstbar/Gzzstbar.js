import React from 'react';
let FontAwesome = require('react-fontawesome');

import styles from  './Gzzstbar.css';

import Timexz from '../Timexz/Timexz.js';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入饼图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Gzzstbar extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        let myChart = echarts.init(document.getElementById('drawgzzstboxId'));
        let option = {
            tooltip:{
                trigger:'item',
                formatter:'{a}<br/>{b}:{c}',
            },
            grid: {
                x:'17%',
                y:30,
                x2:'24%',
                y2:44,
                borderColor : '#e5e5e5'
            },
            xAxis: {
                data: ['1日', '2日', '3日', '4日','5日','6日'],
                axisTick: {show: false},
                axisLine:{
                    lineStyle:{
                        color:'#ffffff',
                    }
                },
                axisLabel:{
                    textStyle:{
                        color:'#ffffff',
                    }
                }
            },
            yAxis: {
                type:'value',
                name:'故障数量',
                nameTextStyle:{
                  color:'#ffffff',
                },
                splitLine: {show: false},
                axisLine:{
                    lineStyle:{
                        color:'#ffffff',
                    }
                },
                axisLabel:{
                    textStyle:{
                        color:'#ffffff',
                    }
                }
            },
            animationDurationUpdate: 1200,
            series: [{
                name:'故障数',
                type: 'bar',
                label:{
                    normal:{
                        show:true,
                        position:'insideTop',
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#2D539B'
                    }
                },
                cursor:'potioner',
                silent: true,
                barWidth: 40,
                barGap: '-100%', // Make series be overlap
                data: [50, 40, 55, 60, 70, 30],
            }, {
                name:'故障数',
                type: 'bar',
                barWidth: 40,
                cursor:'potioner',
                data: [30, 20, 35, 45, 50, 20,],
                itemStyle:{
                    normal:{
                        color:'#508EEE'
                    }
                },
                label:{
                    normal:{
                        show:true,
                        position:'insideTop',
                    },
                },
            }]
        };
        myChart.setOption(option);
    }
    render(){
        return(
            <div className={styles.gzzstbarbox}>
                <div className={styles.gzzstbar_title}>
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
                <Timexz />
                <div id='drawgzzstboxId' className={styles.drawgzzstboxSize}></div>
            </div>
        )
    }
}
export  default  Gzzstbar;