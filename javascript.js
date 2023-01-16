// creamos variables globales
var textoingresado;
var textocopiado;
var textoencriptado=[];
var letras = [];
var distancia=0;
var control=true;



function encriptar(){
    // creamos variable local texto con valor en blanco
    let texto ="";
    // le asignamos el valor true a la variable control
    control=true;
    // creamos un ciclo for que se efectua desde 0 hasta la longuitud que tenga la variable letras
    for(let i=0; i<letras.length;i++){
        // creamos validacion switch que evalua el valor de letras en el indice i
        switch(letras[i]){
            // evalua el valor de la variable letras en el indice i(codigo ascii de la letra ingresada) 
            case 97: 
                // letra a
                // si el codigo ascii corresponde al codigo de la letra a, le asigna el valor ascii que reemplazara a la letra a, a la variable textoencriptado
                textoencriptado[i]= 12449;
                //concatena el valor de la variable texto con el valor de la variable textoencriptado en el indice i convertido en caracter
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
                
            case 98: 
                // letra b
                textoencriptado[i]=12451;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 99: 
                // letra c
                textoencriptado[i]=12453;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 100: 
                // letra d
                textoencriptado[i]=12455;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 101: 
                // letra e
                textoencriptado[i]=12457;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 102: 
                // letra f
                textoencriptado[i]=12459;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 103: 
                // letra g
                textoencriptado[i]=12461;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 104: 
                // letra h
                textoencriptado[i]=12463;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 105: 
                // letra i
                textoencriptado[i]=12465;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 106: 
                // letra j
                textoencriptado[i]=12467;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 107: 
                // letra k
                textoencriptado[i]=12469;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 108: 
                // letra l
                textoencriptado[i]=12471;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 109: 
                // letra m
                textoencriptado[i]=12473;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 110: 
                // letra n
                textoencriptado[i]=12475;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 111: 
                // letra o
                textoencriptado[i]=12477;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 112: 
                // letra p
                textoencriptado[i]=12479;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 113: 
                // letra q
                textoencriptado[i]=12481;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 114: 
                // letra r
                textoencriptado[i]=12483;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 115: 
                // letra s
                textoencriptado[i]=12485;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 116: 
                // letra t
                textoencriptado[i]=12487;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 117: 
                // letra u
                textoencriptado[i]=12489;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 118: 
                // letra v
                textoencriptado[i]=12491;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 119: 
                // letra w
                textoencriptado[i]=12493;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 120: 
                // letra x
                textoencriptado[i]=12495;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 121: 
                // letra y
                textoencriptado[i]=12497;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 122: 
                // letra z
                textoencriptado[i]=12499;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 32: 
                //  espacio
                textoencriptado[i]=12535;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            default: 
            // si el valor de la variable no corresponde a ninguno de los casos, se envia mensaje y se resetean las variables
                alert("Ingreso caracteres incorrectos, ingrese solo minusculas sin caracteres especiales ni signos");
                textoingresado = "";
                letras.length = 0;
                control=false;
                borrarTexto();
                break;
        }


    }
   // si control tiene valor true se ejecuta el codigo, si tiene valor false no ejecuta 
   if(control){
    // le asigna el valor de la variable texto a la varibale textoencriptado
    document.getElementById("textoencriptado").value = texto;
    // le asigna el valor de "" a la variable textoprincipal
    document.getElementById("textoprincipal").value = "";
    // llama a la funcion reproducir con el argumento clon
    reproducir("clon");
    // llama a la funcion revelar con el argumento naruto
    revelar("naruto");
    // llama a la funcion correr  con el argumento 4000
    correr(4000);
   }
}
// funcion que revela el objeto oculto segun el argumento enviado
function revelar(objeto){

    document.getElementById(objeto).style.visibility='visible';
   
}
 // funcion que desplaza la imagen por la pantalla con el argumento de tiempo 
function correr(tiempo){
    // crea variable local con valor de funcion de intervalo de tiempo con la funcion desplazar y e intervalo de 250 ms
    let delayMostrar= setInterval(() => desplazar("naruto"), 250);
    // ejecuta la funcion intervalo guardada en la variable delayMostrar hasta se termina el tiempo del argumento y llama a la funcion mostrar
    setTimeout(() => { clearInterval(delayMostrar);  mostrar(); }, tiempo);  
    
    
}
// reproduce un audio con el nombre del argumento 
function reproducir(sonido){

    document.getElementById(sonido).play();

}

// desplaza por la pantallaa  la imagen con el nombre del argumento
function desplazar(objeto){
     // incrementa en 40 el valor de distancia
    distancia=distancia+40;
    // modifica el padding a la izquierda de la imagen con el nombre del argumento
    document.getElementById(objeto).style.paddingLeft=distancia+'px';

}
// coloca en los valores iniciales la imagen con el nombre del argumento con el valor de distancia
function reiniciar(objeto){
    // oculta la imagen con el nombre del argumento
    document.getElementById(objeto).style.visibility='hidden';
    // asigna valor 0 a la variable distancia
    distancia= 0;
    // modifica el padding a la izquierda de la imagen con el nombre del argumento con el valor de distancia
    document.getElementById(objeto).style.paddingLeft=distancia+'px';

}
 // muestra las imagenes que tienen propiedad oculta
function mostrar(){
   
    document.getElementById('etiquetaencriptado').style.visibility='visible';
    document.getElementById('salida').style.visibility='visible';
    document.getElementById('btncopiar').style.visibility='visible';
    // llama a la funcion reiniciar
    reiniciar("naruto");
    // llama a la funcion reproducir con argumento dattebayo
    reproducir("dattebayo");
       
}
// oculta las imagenes que inicialmente estaban ocultas 
function ocultar(){
    document.getElementById('etiquetaencriptado').style.visibility='hidden';
    document.getElementById('salida').style.visibility='hidden';
    document.getElementById('btncopiar').style.visibility='hidden';
}
// desencripta el texto copiado 
function desencriptar(){
    // crea variable local con valor ""
    let texto="";
    // le asigna valor true a  la variable control
    control=true;
// crea ciclo for para validar cada caracter
    for(let i=0; i<letras.length;i++){
        // valida el valor de la variable letras en el indice i, y ejecuta segun el caso
        switch(letras[i]){
            // evalua el valor de la variable letras en el indice i(codigo ascii de la letra ingresada) 
            case 12449: 
                // letra a
                // si el codigo ascii corresponde al codigo del caracter equivalente a  la letra a, le asigna el valor ascii de la  letra a, a la variable textoencriptado
                textoencriptado[i]= 97;
                //concatena el valor de la variable texto con el valor de la variable textoencriptado en el indice i convertido en caracter
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
                
            case 12451: 
                // letra b
                textoencriptado[i]=98;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12453: 
                // letra c
                textoencriptado[i]=99;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12455: 
                // letra d
                textoencriptado[i]=100;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12457: 
                // letra e
                textoencriptado[i]=101;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12459: 
                // letra f
                textoencriptado[i]=102;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12461: 
                // letra g
                textoencriptado[i]=103;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12463: 
                // letra h
                textoencriptado[i]=104;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12465: 
                // letra i
                textoencriptado[i]=105;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12467: 
                // letra j
                textoencriptado[i]=106;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12469: 
                // letra k
                textoencriptado[i]=107;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12471: 
                // letra l
                textoencriptado[i]=108;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12473: 
                // letra m
                textoencriptado[i]=109;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12475: 
                // letra n
                textoencriptado[i]=110;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12477: 
                // letra o
                textoencriptado[i]=111;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12479: 
                // letra p
                textoencriptado[i]=112;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12481: 
                // letra q
                textoencriptado[i]=113;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12483: 
                // letra r
                textoencriptado[i]=114;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12485: 
                // letra s
                textoencriptado[i]=115;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12487: 
                // letra t
                textoencriptado[i]=116;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12489: 
                // letra u
                textoencriptado[i]=117;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12491: 
                // letra v
                textoencriptado[i]=118;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12493: 
                // letra w
                textoencriptado[i]=119;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12495: 
                // letra x
                textoencriptado[i]=120;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12497: 
                // letra y
                textoencriptado[i]=121;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12499: 
                // letra z
                textoencriptado[i]=122;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            case 12535: 
                //  espacio
                textoencriptado[i]=32;
                texto=texto+String.fromCharCode(textoencriptado[i]);
                break;
            default: 
            // si el valor de la variable no corresponde a ninguno de los casos, se envia mensaje y se resetean las variables
                alert("Ingreso caracteres incorrectos, solo ingrese el texto copiado.");
                textoingresado = "";
                letras.length = 0;
                control=false;
                borrarTexto();
                break;
        }

        
    }
    // si control tiene valor true se ejecuta el codigo, si tiene valor false no ejecuta 
    if(control){

        document.getElementById("textoencriptado").value = texto;
        document.getElementById("textoprincipal").value = "";
        reproducir("clon");
        revelar("naruto");
        correr(4000);

     }
} 
// funcion que valida si el texto ingresado esta en minusculas
function validarMinusculas(){
    // le asigna el texto inggresado a la variable texto ingresado
    textoingresado = document.getElementById("textoprincipal").value;
    // crea ciclo para validar caracter por caracter que este en minuscula
    for(let i=0; i<textoingresado.length;i++){
        // valida si no es un numero
        //isNaN(textoingresado[i]
        if( textoingresado[i]== " " || isNaN(textoingresado[i])){
             // llama la funcion esMinuscula que valida si es la letra minuscula
            
            if( esMinuscula(textoingresado[i])  ){
                // si el caracter esta en minuscula lo ingresa  a  la variable letras en el indice i
                 letras[i]=textoingresado.charCodeAt(i);
                // valida si i es un valor menor  a la longuitud de la variable textoingresado
                 if(textoingresado.length-1==i){
                    //alert(letras[i]);
                    // llama a la funcion encriptar
                    encriptar();
                    
                 }

             }else{
                    // si encuentra caracteres  en mayuscula envia mensaje y reinicia las variables de entrada de texto
                  alert("Por favor solo ingresar minusculas");
                 textoingresado = "";
                 letras.length = 0;
                 borrarTexto();
                break;
            }
        
        }else{
            // si encuentra un numero envia mensaje y reincia  las variables de entrada de texto
            alert("Por favor no ingresar numeros, solo ingresar letras minusculas");
            textoingresado = "";
            letras.length = 0;
            borrarTexto();
           break;

        }
    }
    
}
// funcion que copea el texto en el text area de id textoencriptado
function copiar(){
    // llama a la funcion reproducir con el argumento copia
    reproducir("copia");
    // asinga el valor de la variable textoencriptado a la variable textocopiado
    textocopiado = document.getElementById("textoencriptado");
    // selecciona y copea el texto en la papelera 
    textocopiado.select();
    textocopiado.setSelectionRange(0, 99999);
    document.execCommand('copy');

}
// funcion que valida que los caracteres ingresados sean los que estan en la variable textocopiado, o que esten dentro de los establecidos
function validarSimbolos(){
    // llama a la funcion reproducir con el argumento puño
    reproducir("puño");
    // evalua que el  valor de texto princial no este vacio
    if(!document.getElementById("textoprincipal").value==""){
    // oculta los elementos del cuadro de encriptacion
    ocultar();
    // le asigna el valor de la variable textoprincipal a la variable textoingresado
    textoingresado = document.getElementById("textoprincipal").value;
   // crea ciclo que evalua caracter por caracter de la variable textoingresado 
    for(let i=0; i<textoingresado.length;i++){
        // le asigna el codigo ascii del valor del indice i de la variable textoingresado a la variable letras
        letras[i]=textoingresado.charCodeAt(i);
        // valida si el valor del indice i de la variable letras no esta entre los valores de los caracteres definidos 
        if(!letras[i]<12535 && !letras[i]>12449 ){
            // envia mensaje y reinicia variables de ingreso de texto
            alert("Por favor solo ingresar el texto copiado");
            textoingresado = "";
            letras.length = 0;
            borrarTexto();
            break;

        }

    }
   // llama a la funcion desencriptar
       desencriptar();
    }else{
        // envia mensaje si encuentra vacio el texto de entrada
        alert("Por favor  ingresar el texto copiado");
    }
}

// funcion que borra los text area
function borrarTexto(){

    document.getElementById("textoprincipal").value="";
    document.getElementById("textoencriptado").value="";

}
// funcion que lee el texto de entrada
function leerTexto(){
    // llama funcion reproducir con argumento puño
    reproducir("puño");
    // llama a la funcion ocultar
    ocultar();
    // valida si el text area texto principal no esta vacio
    if(document.getElementById("textoprincipal").value != ""){
        // llama a la funcion que valida si el texto ingresado esta en minuscula
        validarMinusculas();

    }else{
        
        // si el text area de ingreso esta vacio envia mensaje y llama funcion borrartexto
        alert("Por favor ingrese un texto en minusculas");
        borrarTexto();
    }

}

// funcion que evalua si el caracter esta en minuscula
function esMinuscula(letra)
{
    // retorna true si el caracter esta en minuscula, o false si el caracter esta en mayuscula
    return (letra === letra.toLowerCase());

    
}  

