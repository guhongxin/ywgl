import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Jscgl from '../Jscgl/Jscgl.js';
import Xdzt from '../Xdzt/Xdzt.js';
import Jsfx from '../Jsfx/Jsfx.js';
import Ywgl from '../Ywgl/Ywgl.js';
import Xtgl from '../Xtgl/Xtgl.js';

import styles from './Container.css';
const Container=()=>(
	<div className={styles.container}>
		<Route exact  path="/" component={Jscgl}/>
		<Route  path="/xdzt" component={Xdzt}/>
		<Route  path="/jsfx" component={Jsfx}/>
		<Route  path="/ywgl" component={Ywgl}/>
		<Route  path="/xtgl" component={Xtgl}/>
	</div>
)

export default Container;
