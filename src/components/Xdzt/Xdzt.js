import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Twomenu from '../Twomenu/Twomenu.js';
import Xdztfx  from '../Xdztfx/Xdztfx.js';

import styles from './Xdzt.css'

class Xdzt extends React.Component{
	constructor({match}){
		super();
		this.state={
			match:match.url,
			twomenu:[
				{'name':'监控','url':`${match.url}/jk/sszt`},
				{'name':'检测器','url':`${match.url}/jcq/sszt`},
				{'name':'服务器','url':`${match.url}/fwq/sszt`},
				{'name':'应用服务器','url':`${match.url}/yyfwq/sszt`},
				{'name':'网络设备','url':`${match.url}/wlsb/sszt`},
			]
		}

	}
	render(){
		return(
			<div className={styles.xdzt}>
				<Twomenu twomenu={this.state.twomenu}/>
				<Route path={`${this.state.match}/:id`} component={Xdztfx}/>
			</div>
		)
	}
}

export default Xdzt;