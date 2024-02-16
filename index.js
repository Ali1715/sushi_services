// Importar los módulos necesarios
const express = require('express');

// Crear una instancia de Express
const app = require('./src/app');

app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en el puerto`, app.get('port'));
});
