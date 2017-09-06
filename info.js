/*
npm init  创建package.json
npm install --save-dev webpack  安装webpack
md app  -------- touch Greeter.js -----touch main.js
md public ----------touch index.html
---------------------------------------------------------------------------------------------------------------
(1) 配置Greeter.js  index.html main.js 文件
打包：node_modules/.bin/webpack app/main.js public/bundle.js

(2) root下 ---- touch webpack.config.js   配置出口入口
配置后在打包：node_modules/.bin/webpack

(3) 配置package.json 文件  scripts name ----- "start": "webpack"
 配置后在打包：npm start  即可
 注：npm的start命令是一个特殊的脚本名称，其特殊性表现在，在命令行中使用npm start就可以执行其对于的命令，如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name} 如 npm run build
-------------------------------------------------------------------------------------------------------------------
 生成source map(使调试更容易)
 配置webpack.config.js    devtool: 'eval-source-map',  开发阶段使用它,在生产阶段则一定不要启用这个选项
 1、devtool: 'cheap-module-eval-source-map',方法构建速度更快，但是不利于调试，推荐在大型项目考虑时间成本时使用
 2、devtool: 'cheap-module-source-map',对调试造成不便
 3、devtool: 'source-map', 这个文件具有最好的source map(使调试更容易)，但是它会减慢打包速度；
-----------------------------------------------------------------------------------------------------------------
 使用webpack构建本地服务器
 npm install --save-dev webpack-dev-server
 配置webpack.config.js文件
 devServer:{
     contentBase:"./public",//本地服务器所加载的页面所在的目录
     historyApiFallback:true,//不跳转
     port:"8080",
     inline:true//实时刷新
 }
 在package.json中的scripts对象中添加如下命令用以开启本地服务器：
 "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",------
     "start": "webpack",
     "server": "webpack-dev-server --open"----------
 }
 命令 npm run server
---------------------------------------------------------------------------------------------------------------
 Loaders

*/
/*
 --------------------------------------------------------------------------------------------------------
 * react下css 继承方法
 * @01 -----------.root  用法className = {style.root}
 * @02 ----------global(.root) 全局   用法className = 'title'
 * @03 ---------:local(.root) 局部 <==> .root
 * @04 ---------composes:className;    一个选择器可以继承另一个选择器的规则 这称为"组合
 * @05 ---------composes: another from './main.css';   继承其他CSS文件里面的规则
 .className {
 background: #1ABC9C;
 }
 .root{
 composes:className;
 padding: 10px;
 border: 3px solid #ccc;
 color: #fff;
 }
 :global(.root) {
 padding: 10px;
 border: 3px solid #ccc;
 color: #f00;
 }
 .another{
 composes: another from './main.css';
 }
 * */