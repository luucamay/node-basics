const fs = require('fs');
function leer(ruta, micallback){
  fs.readFile(ruta, (err, data) => {
    // data is a buffer - binary
    micallback(data.toString());
  })
}

function escribir(ruta, contenido, otroCallback){
  fs.writeFile(ruta, contenido, function(err){
    if(err){
      console.error('No he podido escribirlo', err);
    } else {
      console.log('Se ha escrito correctamente');
    }
  });
}

function borrar(ruta, nuevoCallback){
  fs.unlink(ruta, nuevoCallback);
}
// escribir(__dirname + '/archivo2.txt', 'soy un nuevo file', console.log)
// leer(__dirname + '/archivo2.txt', console.log);
borrar(__dirname + '/archivo2.txt', console.log);