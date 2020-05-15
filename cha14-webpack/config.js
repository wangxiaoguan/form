const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//把打包后的文件直接注入到html模板中
const CleanWebpackPlugin = require('clean-webpack-plugin');//每次运行前清理目录的插件

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader', // 根据图片大小，把图片优化成base64
                        options: {
                            limit: 10000
                        }
                    },
                    {

                        loader: 'image-webpack-loader',
                        // options: {
                        //     mozjpeg: {
                        //         progressive: true,
                        //         quality: 65
                        //     },
                        //     optipng: {
                        //         enabled: true,
                        //     },
                        //     pngquant: {
                        //         quality: '65-90',
                        //         speed: 4
                        //     },
                        //     gifsicle: {
                        //         interlaced: true,
                        //     },
                        //     webp: {
                        //         quality: 75
                        //     }
                        // }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'AICODER 全栈线下实习', // 默认值：Webpack App
            filename: 'math.html', // 默认值： 'index.html'
            template: path.resolve(__dirname, 'src/index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,//移除html中的注释
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};