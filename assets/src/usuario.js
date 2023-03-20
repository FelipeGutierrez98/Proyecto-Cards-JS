
//***** validacion de usuario *****//


const usuario =prompt('escribe tu usuario');
const validacionUsuario = (usuario) =>{
    if (usuario === 'guti'){
        return document.write(`Tu usuario es correcto Bienvenido ${usuario}`);
    }
    if (usuario !== 'guti'){
        return alert('Tu usuario es incorrecto');
    }
}
let resultado=(validacionUsuario(usuario));
console.log(resultado);


//****  segunda opcion de como realizar la validacion del usuario ****//

/* let usuario =prompt('ingrese su usuario');
const usuarioCorrecto = 'guti';

function comprobacionDeUsuario (usuario,usuarioCorrecto){
    if(usuario === usuarioCorrecto){
        return alert(`su usuario ${usuarioCorrecto} es correcto`);
    }
    return alert('su usuario es incorrecto');
}

let resultado= comprobacionDeUsuario(usuario,usuarioCorrecto);

console.log(resultado);
 */