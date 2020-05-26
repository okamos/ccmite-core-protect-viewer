module.exports = {
  plugins: [
    require('postcss-import'), // import this plugin first!!
    require('postcss-cssnext')({ browsers: ['last 2 versions'] }),
    require('postcss-nested') // import this plugin, after postcss-cssnext
  ]
};
