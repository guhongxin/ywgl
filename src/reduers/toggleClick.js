let defaultState=[
			{name:'驾驶舱管理',active:true,path:'/',id:0},
			{name:'系统状态',active:false,path:'/xdzt/jk/sszt',id:1},
			{name:'检索分析',active:false,path:'/jsfx',id:2},
			{name:'运维管理',active:false,path:'/ywgl',id:3},
			{name:'系统管理',active:false,path:'/xtgl',id:4},
		]
const toggleClick=(state=defaultState,action)=>{
	switch(action.type){
		case 'TOGGLE_Click':
				return state.map((currtentValue)=>{
					if(action.id!=currtentValue.id){
						return Object.assign({},currtentValue,{
								active:false
							});
					}
					return 	Object.assign({},currtentValue,{
								active:!currtentValue.active
							})
				})
			
		default: return state;
	}
}

export default toggleClick;