import React from 'react';

import Timebox from '../Timebox/Timebox.js';
import Gzzsbox from '../Gzzsbox/Gzzsbox.js';
import Jfhjbox from '../Jfhjbox/Jfhjbox.js';
import Cczt from '../Cczt/Cczt.js';
import Gzzl from '../Gzzl/Gzzl.js';
import Gjyj from '../Gjyj/Gjyj.js';

import styles from './Jscgl.css'
const Jscgl=()=>{
	return (
		<div>
			<div className='row'>
				<div className='col-md-4'>
					<Timebox />
				</div>
				<div className='col-md-4'>
					<Gzzsbox />
				</div>
				<div className='col-md-4'>
					<Jfhjbox />
				</div>
			</div>
			<div className='row'>
				<div className='col-md-12'>
					<Cczt />
				</div>
			</div>
			<div className='row'>
				<div className='col-md-12'>
					<Gzzl />
				</div>
			</div>
			<div className='row'>
				<div className='col-md-12'>
					<Gjyj />
				</div>
			</div>		
		</div>
	)
}
export default Jscgl;