// variable global de node para generar rutas absolutas o relativas
const path = require('path');
//plugin para generar html
const HtmlWebpackPlugin = require('html-webpack-plugin');
//plugin para extraer css
const miniCssExtractPlugin = require('mini-css-extract-plugin');

//de rules se separa cada rule especifica si se tuviera mas de una 
const rulesJs = {
  //configuración de babel
  test: /\.js$/,
  //excluimos los archivos de node modules
  exclude: /node_modules/,
  use:{
    loader: 'babel-loader',
    options:{
      presets: ['@babel/preset-env']
    }
  }
};

const rulesStyles ={
  test: /\.scss$/,
  exclude: /node_modules/,
  use:[
    miniCssExtractPlugin.loader,
    'css-loader',
    'sass-loader',
    'postcss-loader'
  ]
};

//configuración de loader para fonts
const rulesFonts = {
  test: /\.woff2$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/fonts/'
      }
    }
  ]
};

//configuración de loader para imágenes
const ruleAssets = {
    type: "asset",
    test: /\.(png|jpg|gif|svg)$/,
    generator: {
      filename: 'assets/images/[name][ext]'
    }
};

//array de rules
const rules = [rulesJs, rulesStyles, rulesFonts, ruleAssets];


module.exports = {
  //development: para desarrollo de la aplicación optimiza el rendimiento en tiempo de compilación
  // production: para producción, se enfoca en reducir tamaño, minificar y optimizar el rendimiento, también se omiten características de desarrollo
  mode: 'development',

  //Ruta del archivo js principal
  entry: './src/js/index.js',

  //configuración de la salida
  output:{
    //lugar de salida donde ubicaremos en nuevo js transpilado
    //--dirname: directorio actual, variable global de node utilizado para generar rutas absolutas o relativas
    path: path.resolve(__dirname, 'public'),
    //nombre del archivo final generado
    filename: 'assets/js/app.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new miniCssExtractPlugin({ 
      filename: 'assets/css/app.css',
      chunkFilename: 'assets/css/[id].css'
    })
  ],

  //configuración de rules
  module:{
    rules
  }
};