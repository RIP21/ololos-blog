var webpack = require("webpack");
var autoprefixer = require("autoprefixer");
var path = require("path");


module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      "src", "node_modules"
    ]
  },
  name: "server-side rendering",
  context: path.join(__dirname, "src"),
  entry: {
    server: "server.js"
  },
  target: "node",
  output: {
    // The output directory as absolute path
    path: path.join(__dirname, 'public', 'assets'),
    // The filename of the entry chunk as relative path inside the output.path directory
    filename: "server.js",
    // The output path from the view of the Javascript
    publicPath: "/assets/",
    libraryTarget: "commonjs2"
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEVCLIENT__: false,
      __DEVSERVER__: true
    })
  ],
  module: {
    loaders: [
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
      {test: /\.json$/, loader: 'json'},
      { test: /\.html$/, loader: 'html-loader' }
    ]
  }
};
