const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    publicPath: "/toDoList/",
    path: path.resolve(__dirname, 'dist'),
  },
};
