const textArea = document.querySelector(".text__area");
const mensaje = document.querySelector(".text__area__2");
const parrafoPrimero = document.querySelector(".text__area__2__p1");
const parrafoSegundo = document.querySelector(".text__area__2__p2");
const botonCopiar = document.querySelector (".boton__copiar")
const mensajesIniciales = document.querySelector(".mensajes__iniciales");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    parrafoPrimero.textContent = "";
    parrafoSegundo.textContent = "";
}


function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

async function copiarTexto(mensaje) {
    try {
      await navigator.clipboard.writeText(mensaje);
      console.log('Texto copiado al portapapeles:', mensaje);
    } catch (err) {
      console.error('Error al copiar texto:', err);
    }
}

botonCopiar.addEventListener('click', () => {
    copiarTexto(mensaje.value);
  });