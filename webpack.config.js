const path = require("path");

const port = process.env.PORT || 3000;

const HtmlWebPackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin   = require('vue-loader/lib/plugin');

module.exports = {
  
  mode: "development",

  entry: './src/main.js',

  output: {                                          
    path         : path.join(__dirname, '/dist'),
    filename     : "[name]_[hash].js",
    chunkFilename: "[name]_[hash].js"
  },

  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },

    extensions: [ '.vue', '.sass', '.js' ],

    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ]
  },

  module: {                                          
    rules: [
      {
        test   : /\.js$/,                       
        exclude: /node_module/,              
        use    : {
          loader: 'babel-loader'               
        }
      },

      {
        test  : /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.css$/,
        use : [
          'vue-style-loader',
          "css-loader",
          "postcss-loader"
        ]
      }, 
      
      {
        test   : /\.scss$/,
        exclude: /node_module/, 
        use    : [
          'vue-style-loader',
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },   

      {
        test  : /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit   : 8192,
              fallback: 'file-loader',
              name    : '[path][name].[ext]?v=[hash]'
            }
          }
        ]
      },

      {
        test: /\.(eot|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      }
    ]
  },

  devServer: {
    host              : "0.0.0.0",
    port              : port,
    contentBase       : __dirname + "/dist/",
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 5000,
      poll            : 5000,
      ignored         : 'node_modules',
    }
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    }),
    new VueLoaderPlugin()
  ]

}