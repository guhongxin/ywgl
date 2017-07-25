import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import styles from './Menu.css';
const Menu=({menu,onClick})=>{
	return (  
		<div className={styles.menu}>
			<ul>
			{
				menu.map((argument,index)=>(
					<li key={argument.id} className={argument.active?styles.li_active:''}>
						<Link to={argument.path} onClick={()=>onClick(argument.id)}>{argument.name}</Link>
					</li>
				))
			}
			</ul>
		</div>
	)
}
export default Menu;