const funcMatematicas = require('./utils/funcMatematicas');
const lenguajes = ['PHP', 'Javascript','Python','C++','Darth', 'Java','Basic'];
let encontrado = false;


lenguajes.forEach((lenguaje) =>{
    if(lenguaje === 'PHP'){
        encontrado = true;
    }
    console.log(lenguaje);
});

console.log(encontrado);

console.log(funcMatematicas.sumar(15, 29));