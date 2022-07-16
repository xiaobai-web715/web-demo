module.exports = {
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                use : [
                    {
                        loader : 'babel-loader',
                        options : {
                            presets : ['@babel/preset-react']
                        }
                    }
                ],
            },
            {
                test : /\.css$/,
                use : ['style-loader' , 'css-loader'],
            },
            {
                test :/\.s[ac]ss$/i,
                use : [
                    'style-loader', 
                    'css-loader', 
                    'sass-loader', //目前的这里的配置可以实现对sass编译成css文件(这时css文件的内容时在html页面的head标签下的<style>标签中，如果还想在打包时将css文件单独打包出来，需要以下操作npm install --save-dev mini-css-extract-plugin)
                ]
            }
        ]
    }
}