var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  debug: true,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/js/app.cjsx'
  ],

  output: {
    path: __dirname + '/src/js',
    filename: 'bundle.js',
    publicPath: '/src/js/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
    })
  ],

  resolve: {
    extensions: ['', '.js', '.cjsx', '.coffee'],
    alias: {
    }
  },

  module: {
    noParse: [
    ],
    loaders: [
      { test: /\.cjsx$/, loaders: ['react-hot', 'coffee', 'cjsx']},
      { test: /\.coffee$/, loader: 'coffee' },
      { test: /\.less$/, loaders: ['style', 'css', 'less'] },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.png$/, loader: "file" },
      { test: /\.js$/, loaders: ['react-hot', 'jsx']},
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
    ]
  }
};
