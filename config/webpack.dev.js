const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// console.log(__dirname) __dirname获取当前执行文件的文件夹所处的绝对路径
// console.log(path.join(__dirname , '..' ,'src/index.js')) d:\前端小DOM\src\index.js
module.exports = merge(common , {
    mode : 'development',
    entry : {
        app : path.join(__dirname , '..' ,'src/index.js'),
    },
    output : {
        path : path.join(__dirname , '..' , 'dist'),
        filename : '[name].js'
    },
    plugins : [
        new HtmlWebpackPlugin({template : path.join(__dirname , '..' , 'public/index.html')})
    ],
    devServer : {
        contentBase : path.join(__dirname , '..' , 'dist/index.html'),
        historyApiFallback : true,
        hot : true,
        port : 4000,
    }
})
// console.log(module.exports)