/**16.Realiza un script que solicite una frase al usuario. Deberá indicar si aparece en ella o no la
palabra indicada por el usuario. En caso de que la encuentre indicar a partir de qué posición
se puede encontrar la primera coincidencia. Indicar por cuantos caracteres está formada la
palabra buscada y por último sustituirla 'dwecl'.  */

function recibir() {
    var str = document.getElementById("texto").value;
    var word = document.getElementById("palabra").value;
    var array=str.split(" ");
    var wordnum;

    for (let index = 0; index < array.length; index++) {
        if(word==array[index]){
        wordnum=index+1;
        break;
    }
        
    }

    if (str && word) {
        var match = str.indexOf(word);
        

        if (match >= 0) {
            document.getElementById("insertar").innerHTML =`<br>La primera coincidencia se encuentra en la posicion ${match}.<br>`;
            document.getElementById("insertar2").innerHTML =`La palabra a buscar contiene ${word.length} caracteres.<br>`;
            document.getElementById("insertar3").innerHTML =`La palabra a buscar es la ${wordnum}º palabra.<br>`;
            document.getElementById("insertar4").innerHTML =`Frase original: ${str}<br><br>Frase tras el cambio: ${str.replace(word, "dwecl")}`;
        } else {
            document.getElementById("insertar").innerHTML ="<br>La palabra no aparece";
            document.getElementById("insertar2").innerHTML ="";
            document.getElementById("insertar3").innerHTML ="";
            document.getElementById("insertar4").innerHTML ="";
        }
    }else{
        let dev=`<br>Error: no has introducido ${word? "la frase":"la palabra a buscar"}`
        document.getElementById("insertar").innerHTML =dev.fontcolor("red");
        document.getElementById("insertar2").innerHTML ="";
        document.getElementById("insertar3").innerHTML ="";
        document.getElementById("insertar4").innerHTML ="";
        
    }
}