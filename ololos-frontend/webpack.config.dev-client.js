var webpack = require("webpack");
var autoprefixer = require("autoprefixer");
var path = require("path");

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: [
      'src', 'node_modules'
    ]
  },
  name: 'browser',
  debug: true,
  devtool: 'eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  context: path.join(__dirname, 'src'),
  entry: {
    app: ['./client.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'] // Defining path seems necessary for this to work consistently on Windows machines.
  },
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: path.resolve(__dirname, 'src'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/assets/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true,
      __DEVCLIENT__: true,
      __DEVSERVER__: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()

  ],
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        loader: 'babel',
        // Reason why we put this here instead of babelrc
        // https://github.com/gaearon/react-transform-hmr/issues/5#issuecomment-142313637
        query: {
          "presets": ["react-hmre", "latest", "react", "stage-1"]
        },
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, '/node_modules/')
      },
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
      {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
      {test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']},
      {test: /\.json$/, loader: 'json'},
      {test: /\.html$/, loader: 'html-loader'}
    ]
  },
  postcss: () => [autoprefixer]
};
