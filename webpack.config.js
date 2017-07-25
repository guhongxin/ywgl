var Path = require("path");

var config={
	entry:'./main.js',
	output:{
		path:__dirname,
        filename: 'index.js'
	},

	devServer:{
		inline:true,
		port:7777,
		historyApiFallback: true, //加上这个路由就可以，在输入框输入地址进行跳转
	},
	module:{
		loaders:[{
				test:/\.js?$/,
				exclude:/node_modules/,
				loaders:'babel-loader',
				query:{
					presets:['es2015','react']
				}
			}, {
			    test: /\.css$/,
			  	exclude: /node_modules/,
				loaders: [
				    'style-loader',
				    'css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]'
				]
			}
		]
	},
}
module.exports=config;