// For info about this file refer to webpack and webpack-hot-middleware documentation
// For info on how we're generating bundles with hashed filenames for cache busting: https://medium.com/@okonetchnikov/long-term-caching-of-static-assets-with-webpack-1ecb139adb95#.w99i89nsz
var webpack = require( 'webpack');
var ExtractTextPlugin = require( 'extract-text-webpack-plugin');
var WebpackMd5Hash = require( 'webpack-md5-hash');
var InlineEnviromentVariablesPlugin = require( "inline-environment-variables-webpack-plugin");
var autoprefixer = require( 'autoprefixer');
var path = require( 'path');
var assetsPath = path.join(__dirname, "public", "assets");
var publicPath = "/assets/";

var GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false,
  __DEVCLIENT__: false,
  __DEVSERVER__: false
};

var commonPlugins = [
  // Hash the files using MD5 so that their names change when the content changes.
  new WebpackMd5Hash(),

  // Optimize the order that items are bundled. This assures the hash is deterministic.
  new webpack.optimize.OccurenceOrderPlugin(),

  // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
  new webpack.DefinePlugin(GLOBALS),

  // Generate an external css file with a hash in the filename
  new ExtractTextPlugin('[name].[contenthash].css'),

  // Eliminate duplicate packages when generating bundle
  new webpack.optimize.DedupePlugin(),

  // Minify JS
  new webpack.optimize.UglifyJsPlugin(),

  new InlineEnviromentVariablesPlugin({NODE_ENV: 'production'})
];

var commonLoaders = [
  {
    test: /\.js$|\.jsx$/,
    loader: 'babel',
    // Reason why we put this here instead of babelrc
    // https://github.com/gaearon/react-transform-hmr/issues/5#issuecomment-142313637
    query: {
      "presets": ["latest", "react", "stage-1"]
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
];



module.exports = [{
  name: "browser",
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // debug: true,
  //devtool: 'source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: path.resolve(__dirname, 'src/index'),
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: assetsPath,
    publicPath: publicPath,
    filename: '[name].[chunkhash].js'
  },
  plugins: commonPlugins,
  module: {
    loaders: commonLoaders
  },
  postcss: () => [autoprefixer]
}, {
  name: "server-side rendering",

  resolve: {
    extensions: ['', '.js', '.jsx', ".ts", ".tsx"],
    modulesDirectories: [
      "src", "node_modules"
    ]
  },
  context: path.join(__dirname, "src"),
  entry: {
    server: "./server.js"
  },
  target: "node",
  output: {
    // The output directory as absolute path
    path: assetsPath,
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: "server.js",
    // The output path require( the view of the Javascript
    publicPath: publicPath,
    libraryTarget: "commonjs2"
  },
  plugins: commonPlugins,
  module: {
    loaders: commonLoaders
  },
  postcss: () => [autoprefixer]
}];
