import  React from 'react';

import  styles from  './Piebox.css';

let FontAwesome = require('react-fontawesome');

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入饼图
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
//引入图例
// import 'echarts/lib/component/legend'


class Piebox extends React.Component{
    constructor(){
        super();
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        let _dom =this.refs.pieboxdom;
        let myChart = echarts.init(document.getElementById(_dom.getAttribute('id')));
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color:['#66EE87','#9BF26F','#66DAC2','#F1CF63'],
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    center:['50%','50%'],
                    label: {
                        normal: {
                            show: true,
                            position: 'outside'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '10',
                                fontWeight: 'bold'
                            }
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
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                }
            ]
        };
        // 绘制图表
        myChart.setOption(option);
        let _params={
            selected:[]
        };

        function pbu(map,mapoption,param){
            //注意：扇形选中后 series[0].data[j]会增加一个selected对象
            for(var j=0;j<mapoption.series[0].data.length;j++){
                delete mapoption.series[0].data[j].selected ;
            }
            for(var i=0;i<mapoption.series[0].data.length;i++){
                if(mapoption.series[0].data[i].name === param.name){
                    mapoption.series[0].data[i].selected = true;
                    map.setOption(mapoption);
                }

            }

        }
        myChart.on('click', function (params) {
            if(typeof (_params.selected[0])=='undefined'){
                _params.selected[0]=params.name;
            }else{
                if(_params.selected[0]===params.name){
                    for(var j=0;j<option.series[0].data.length;j++){
                        delete option.series[0].data[j].selected ;
                        myChart.setOption(option);
                    }
                }
                else {
                    delete  _params.selected[0];
                    _params.selected[0]=params.name;
                }

            }
            pbu(myChart,option,params);
        });
    }
    componentWillUnmount(){
    }
    render(){
        console.log(this.props.idIndex);
        return(
            <div className={styles.piebox}>
                <div className={styles.piebox_head}>
                    <span className={styles.spantitle}>{this.props.title}</span>
                    <FontAwesome
                        className='fa fa-line-chart'
                        name='line-chart'
                        size='lg'
                        style={{'marginLeft':'20px','color':'#ffffff',}}
                    />
                </div>
                <div id={`drawpiebox${this.props.idIndex}`} className={styles.drawpiebox} ref="pieboxdom">
                </div>
            </div>
        )
    }
}
export  default Piebox;