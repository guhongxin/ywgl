import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import styles from './Twomenu.css';
class Twomenu extends React.Component{
	constructor(){
		super();
	}
	render(){
		let twomenu=this.props.twomenu;
		return(
			<div className={styles.twomenu}>
				<ul>
					{
						twomenu.map(function(currentValue,index){
							return(
								<li key={index}>
									<Link to={currentValue.url}>{currentValue.name}</Link>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

export default Twomenu;