import React from 'react';

import { connect } from 'react-redux';

import Menu from '../components/Layout/Menu.js';
import {toggleClick} from '../actions/actions.js';


const mapStateToProps=(state)=>{
	return {
		menu:state.toggleClick
	}
}

const mapDispatchToProps=(dispatch)=>{
	return {
		onClick:(id)=>{
			dispatch(toggleClick(id))
		}
	}
}

const MenuClick=connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);

export default MenuClick;