import React,{PropTypes}from 'react';

import MenuClick from '../../containers/MenuClick.js';

import styles from './Sider.css';

//css module不能在css样式里面引入'background':'url("./src/img/bj.jpg") no-repeat center center'
const Sider=()=>{
	return (
		<div className={styles.sider}>
			<div className={styles.logo} style={{'background':'url("./src/img/bj.jpg") no-repeat center center'}}>
				<div className={styles.tablecell}>
					<img src='./src/img/a6.jpg' />
				</div>
			</div>
			<MenuClick />
		</div>
	)
}
Sider.PropTypes={
	menu:PropTypes.array,
}
export default Sider;
