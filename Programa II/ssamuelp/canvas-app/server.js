const express = require('express');
const app = express();
const port = 3000;

// Servir los archivos estáticos en la carpeta actual
app.use(express.static(__dirname));

// Inicia el servidor
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
