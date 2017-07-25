import React from 'react';

import styles from './Jfhjbox.css'

let FontAwesome = require('react-fontawesome');
class Jfhjbox extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div className={styles.jfhjbox}>
				<p className={styles.p_title}>机房环境
					<FontAwesome
				        className='fa fa-line-chart'
				        name='line-chart'
				        size='lg'
				        style={{'float':'right','lineHeight':'20px','marginRight':'10px'}}
				    />
				</p>
			</div>
		)
	}
}
 
export default Jfhjbox;