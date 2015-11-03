module.exports = { 
	entry: { 
		"regist": "./static/src/react/user/regist/main.js",
		"login": "./static/src/react/user/login/main.js",
		"index": "./static/src/react/index/SIndexMain.js"
	},
    output: { filename: "[name].bundle.js" }, 
	module: { loaders: [
		{ test: /.css$/, loader: "style!css" },
		{ test: /.js$/, loader: "jsx-loader" } ] 
	},
	resolve: { extensions: ['', '.js', '.jsx'] }, 
	plugins: []
};