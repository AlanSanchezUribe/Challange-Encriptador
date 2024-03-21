function encriptar(){

    var texto = document.getElementById("input-texto").value.toLowerCase();
    var textoencriptado = texto.replace(/e/igm,"enter");
    var textoencriptado = textoencriptado.replace(/i/igm,"imes");
    var textoencriptado = textoencriptado.replace(/a/igm,"ai");
    var textoencriptado = textoencriptado.replace(/o/igm,"ober");
    var textoencriptado = textoencriptado.replace(/u/igm,"ufat");
    document.getElementById("mensaje").value = textoencriptado;
    document.getElementById("input-texto").value = "";
     document.getElementById("muñeco").style.visibility = "hidden";
    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("mensaje").style.visibility = "visible";
   
    document.getElementById("titulo-mensaje").style.visibility = "hidden";
    document.getElementById("parrafo").style.visibility = "hidden";

}

function decifrar(){
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var textoencriptado = texto.replace(/enter/igm,"e");
    var textoencriptado = textoencriptado.replace(/imes/igm,"i");
    var textoencriptado = textoencriptado.replace(/ai/igm,"a");
    var textoencriptado = textoencriptado.replace(/ober/igm,"o");
    var textoencriptado = textoencriptado.replace(/ufat/igm,"u");
    document.getElementById("mensaje").value = textoencriptado;
    document.getElementById("input-texto").value = "";
    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("muñeco").style.visibility = "hidden";
    document.getElementById("mensaje").style.visibility = "visible";
    document.getElementById("titulo-mensaje").style.visibility = "hidden";
    document.getElementById("parrafo").style.visibility = "hidden";
}

function copiar(){
     let textoCopiado = document.getElementById("mensaje").value.toLowerCase();
    navigator.clipboard.writeText(textoCopiado)
  .then(() => {
    console.log('Texto copiado al portapapeles:', textoCopiado)
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })

       }
     
