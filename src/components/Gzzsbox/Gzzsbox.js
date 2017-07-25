import React from 'react';

import styles from './Gzzsbox.css';

class Gzzsbox extends React.Component{
	constructor(){
		super();
		this.state={
		}
	}
	componentDidMount(){
	}
	render(){
		return (
			<div className={styles.gzzsbox}>
				<p className={styles.p_title}>设备故障指数</p>
				<div></div>
			</div>
		)
	}
}

export default Gzzsbox;