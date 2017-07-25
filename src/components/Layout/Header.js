import React from 'react';

import styles from './Header.css';


let FontAwesome = require('react-fontawesome');


const Header=({title,loginUser})=>{
	return (
		<div className={styles.header}>
			<h3 className={styles.header_h3}>{title}</h3>
			<ul className={styles.header_ul}>
				<li>
					<FontAwesome
				        className='fa fa-envelope-o'
				        name='envelope-o'
				        size='lg'
				    />
				</li>
				<li>
					<FontAwesome
				        className='fa fa-user-o'
				        name='user-o'
				        size='lg'
				    />
				    <span>{loginUser}</span>
				</li>
			</ul>
		</div>
	)
}
export default Header;