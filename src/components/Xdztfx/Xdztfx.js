import React from 'react';

import Treemenu from '../Treemenu/Treemenu.js';
import  Ztfx from  '../Ztfx/Ztfx.js';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Xdztfx extends  React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div>
				<Treemenu url={this.props.match.url}/>
				<div>
					<Route path={`${this.props.match.url}/:id`} component={Ztfx}/>
				</div>

			</div>
		)
	}
}

export default Xdztfx;