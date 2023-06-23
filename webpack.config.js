const path = require('path');

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
    filename: 'app.js'
  }
};