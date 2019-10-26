/**1*/
function lista() {
    var paises = [['España', 'Madrid', ['Paella', 'Cocido', 'Salmorejo']],
    ['Francia', 'París', ['Fondue de queso', 'Crepes', 'Croissants']],
    ['Italia', 'Roma', ['Pasta', 'Pizzas', 'Helados']]];

    var paises2 = [['España', ['Madrid', ['Paella', 'Cocido', 'Salmorejo']]],
    ['Francia', ['París', ['Fondue de queso', 'Crepes', 'Croissants']]],
    ['Italia', ['Roma', ['Pasta', 'Pizzas', 'Helados']]]];

    var ulista = document.getElementById("lista");
    var dlista = document.getElementById("lista2");

    for (let i = 0; i < paises.length; i++) {
        let pais = document.createElement("LI");
        let texto = document.createTextNode(paises[i][0]);
        pais.appendChild(texto);
        ulista.appendChild(pais);
        let subli = pais.appendChild(document.createElement("UL"))
        let cali = document.createElement("LI");
        let capi = document.createTextNode(paises[i][1]);
        let coli = document.createElement("LI");
        let comi = document.createTextNode(paises[i][2]);
        cali.appendChild(capi);
        coli.appendChild(comi);
        subli.appendChild(cali);
        subli.appendChild(coli);
    }
    for (let i = 0; i < paises2.length; i++) {
        let pais = document.createElement("DD");
        let texto = document.createTextNode(paises2[i][0]);
        pais.appendChild(texto);
        dlista.appendChild(pais);
        let subli = pais.appendChild(document.createElement("DT"))
        let cali = document.createElement("DD");
        let capi = document.createTextNode(paises2[i][1][0]);
        let coli = document.createElement("DD");
        let comi = document.createTextNode(paises2[i][1][1]);
        cali.appendChild(capi);
        coli.appendChild(comi);
        subli.appendChild(cali);
        subli.appendChild(coli);
    }

}
