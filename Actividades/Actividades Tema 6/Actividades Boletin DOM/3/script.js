// 3. Aplicación web que incluya un input de tipo text, donde el usuario irá insertando los datos que
// quiere añadir en una lista desordenada, y se irán mostrando.
window.onload = () => {
    var ul = document.body.appendChild(document.createElement("ul"))
    anadir.addEventListener("click", () => {
        let txt = document.createTextNode(texto.value);
        let li = document.createElement("li");
        li.appendChild(txt || "")
        ul.appendChild(li)
        texto.value = ""
    })
    borrar.addEventListener("click", () => {
        let lis = document.getElementsByTagName("li")
        for (let i = 0; i < lis.length; i++) {
            if (lis[i].firstChild.data.trim() == "") {
                ul.removeChild(lis[i])
                i--;
            }
        }
    })
    clonar.addEventListener("click", () => {
        var node = ul.lastChild.cloneNode(true);
        ul.appendChild(node);
    })
}
