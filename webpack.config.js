//touch webpack.config.js
//有了这个配置之后，再打包文件，只需在终端里运行webpack(非全局安装需使用node_modules/.bin/webpack)命令就可以了，这条命令会自动引用webpack.config.js文件中的配置选项
//如果没有此文件 命令需输入 node_modules/.bin/webpack app/main.js public/bundle.js
module.exports = {
  devtool: 'eval-source-map',//开发阶段使用它,在生产阶段则一定不要启用这个选项
  entry: __dirname + "/app/main.js",//唯一入口文件 //__dirname 是 node.js的一个全局变量，它指向当前脚本所在的目录
  output: {
    path: __dirname + "/public",//打包文件存放的路径
    filename: "bundle.js" //打包后输出的名字
    //  bundle-[hash].js:  -[hash] 为了解决缓存,不太明白这里，本来是为了解决缓存的，为什么反而加上实现不了实时刷新了
  },
  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    port: "8080",
    inline: true//实时刷新
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,    //编译后缀为 js jsx的文件
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,  //编译后缀为css的文件
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader?modules",// ?modules表示打开 modules功能
            /*options: {      //两种写法都可以
              modules: true
            }*/
          }
        ]
      }
    ]
  }
  /*plugins: [
   new webpack.LoaderOptionsPlugin({
   options: {
   postcss: [values,autoprefixer]
   }
   })
   ]*/
};