function otraFuncion(){
  serompe();
}

function serompe(){
  return 3 + z;
}

try {
  otraFuncion();
} catch (err){
  console.error('algo se ha roto');
  console.error(err.message);
}

function badfunction() {
  setImmediate(() => {
      try {
          return5 + z
      } catch (error) {
          console.log('bad function ha fallado')
          console.error(error.message)
          console.log('continuamos...')
      }
  });
}

badfunction()

