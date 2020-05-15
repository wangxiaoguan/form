// 生成最终dist版本，
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//提取css到单独文件的插件
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');//压缩js文件
const HtmlWebpackPlugin = require('html-webpack-plugin');//把打包后的文件直接注入到html模板中
const CleanWebpackPlugin = require('clean-webpack-plugin');//每次运行前清理目录的插件
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

let prodConfig= {
    mode: 'production',
    output: {
        filename: 'main.[hash].js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {   test: /\.(sc|c|sa)ss$/,
                use: [MiniCssExtractPlugin.loader,
                    {loader:'css-loader',
                        options:{
                            sourceMap:true
                        }
                    },{
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true,
                            plugins: [
                                require('autoprefixer')({
                                    browsers: [
                                        // 加这个后可以出现额外的兼容性前缀
                                        "> 0.01%"
                                    ]
                                })
                            ]
                        }
                    },
                    {loader:'sass-loader',
                        options:{
                            sourceMap:true
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name][hash].css",////都提到build目录下的css目录中
            chunkFilename: "[id][hash].css"
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),//压缩js的插件
            new OptimizeCSSAssetsPlugin({})//压缩css的插件
        ]
    }
};
module.exports = merge(common,prodConfig);