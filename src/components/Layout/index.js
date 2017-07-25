import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './Header.js';
import Sider from './Sider.js';
import Container from './Container.js'
import Footer from './Footer.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reduers from '../../reduers/reduers.js';

import styles from './index.css';

let store=createStore(reduers);

const Index=()=>{
	return (
		<Provider store={store}>
			<Router>
				<div className={styles.layout}>
					<div className={`col-md-2 ${styles.layout_height}`} >
						<Sider />
					</div> 
					<div className={`col-md-10 ${styles.layout_height}`}>
						<Header title='杭州交管局运维平台'
								loginUser='张三'/>
						<Container />
						<Footer />
					</div>
				</div>
			</Router>
		</Provider>
	)
}

export default Index;