// webpack 配置文件
module.exports = {
	baseUrl:process.env.NODE_ENV === 'production'?'./':'/',
	devServer: {
		disableHostCheck: true, // 不约束域名
        overlay: {
          warnings: false,
          errors: false,
          'no-tabs': 'off',
          lintOnSave: false
        }
	},
    
}