import React from 'react';

import styles from './Timebox.css';
class Timebox extends React.Component{
	constructor(){
		super();
		this.state={
			LocaleDate:'',
			time:'',
			_timer:null
		};
	}
	componentWillMount(){
		
	}
	componentDidMount(){
		let that=this;
		let timer=setInterval(function(){
				let date=new Date();
				let reg=/[\u4E00-\u9FA5]/g;
				that.setState({
					'LocaleDate':date.toLocaleDateString(),
					'time':date.toLocaleTimeString().replace(reg,'')
				});
			},1000);

		this.setState({_timer:timer});
	}

	componentWillUnmount(){
		clearInterval(this.state._timer);
	}
	render(){
		return (
			<div className={styles.timebox}>
				<p className={styles.p_title}>当前时间</p>
				<p className={styles.p_date}>{this.state.LocaleDate}</p>
				<h1>{this.state.time}</h1>
			</div>
		)
	}
}

export default Timebox;