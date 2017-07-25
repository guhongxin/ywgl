import React from 'react';
import styles from './Czzt.css';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Czzt extends React.Component{
	constructor(){
		super();
	}
	componentDidMount(){
        let _dom =this.refs.drawczztbox1;
        let myChart = echarts.init(document.getElementById(_dom.getAttribute('id')));
        let option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '20%',
                containLabel: true
            },
            xAxis:  {
                type: 'value',
                splitLine:{
                	//分割线
                    show:false
                },
                axisLabel:{
					//刻度标签
                    show:true,
                    textStyle:{
                        color:'#ffffff'
                    }
                },
                axisLine:{
                    lineStyle:{
                		color:'#ffffff'
					}
				}
            },
            yAxis: {
                type: 'category',
                axisLabel:{
                    //刻度标签
                    show:true,
                    textStyle:{
                        color:'#ffffff'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#ffffff'
                    }
                },
                data: [
                    {
                        value:'存储比例',
                        textStyle: {
                            fontSize: 10,
                            color: '#ffffff',
                        }
                    }
				],

            },
			color:['#48DADD','#57E09F','#71E54E','#DACC40','#D9944E','#DE4C50'],
            series: [
                {
                    name: '内存1',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [320]
                },
                {
                    name: '内存2',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [120]
                },
                {
                    name: '内存3',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [220]
                },
                {
                    name: '内存4',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [150]
                },
                {
                    name: '内存5',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [820]
                }
            ]
        };
        myChart.setOption(option);
	}
	render(){
		return (
			<div id="czztbox"  className={styles.czzt} >
				<div id="drawczztbox" ref="drawczztbox1" className={styles.drawczztbox}></div>
			</div>
		)
	}
}

export default Czzt;