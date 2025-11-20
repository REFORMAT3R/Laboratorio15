console.log("EJERCICIO 01");
const subtitulo = document.querySelector("h2");
console.log(subtitulo.textContent);

console.log("EJERCICIO 02");
const parrafos = document.querySelectorAll("p");
let c = 0;
parrafos.forEach(p => {
    if(c < 3){
        p.textContent = "Texto actualizado";
        console.log(p.textContent);
    }
    c++;
});

console.log("EJERCICIO 03");
const imagen = document.querySelector("img");
imagen.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/1/12/Full_image_of_Tung_Tung_Tung_Sahur.png")
imagen.setAttribute("alt", "Nueva imagen");
console.log("Nuevo src: " + imagen.getAttribute("src"));
console.log("Nuevo alt: " + imagen.getAttribute("alt"));

console.log("EJERCICIO 04");
const lista = document.querySelectorAll("li");
lista.forEach(li => {
    li.classList.add("resaltado");
    if(li.classList.contains("oculto")) {
        li.classList.remove("oculto");
    }
    console.log(li.className);
});

console.log("EJERCICIO 05");
const nuevaLista = document.getElementById("arreglo");
const hijos = nuevaLista.children;
for(const li of hijos) {
    console.log(li.textContent);
}
let i = 0;
console.log("EJERCICIO 06");
const contenedores = document.querySelectorAll("div");
const colores = ["lightblue", "lightgreen", "lightcoral", "khaki"];
contenedores.forEach(div => {
    div.style.background = colores[i];
    i++;
    console.log(div.style.background);
});

console.log("EJERCICIO 07");
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Elemento insertado con JS";
document.body.appendChild(nuevoParrafo);
console.log("Nuevo parrafo insertado");

console.log("EJERCICIO 08");
const nuevoSubtitulo = document.createElement("h3");
nuevoSubtitulo.textContent = "Subtitulo insertado con JS";
document.querySelector("section").insertBefore(nuevoSubtitulo, document.querySelector("section").firstElementChild);
console.log("Nuevo subtitulo insertado");

console.log("EJERCICIO 09");
const section1 = document.querySelector("section");
const ul = document.createElement("ul");
let t = 1;
while(t<= 5) {
    const li = document.createElement("li");
    li.textContent = "Elemento " + t;
    ul.appendChild(li);
    t++;
}
section1.appendChild(ul);
console.log(ul);

console.log("EJERCICIO 10");
const parrafo3 = document.getElementById("parrafoNuevo");
const div1 = document.createElement("div");
div1.textContent = "Parrafo reemplazado";
parrafo3.parentNode.replaceChild(div1, parrafo3)
console.log(div1.textContent);

console.log("EJERCICIO 11");
const parrafo4 = document.querySelectorAll("p");
const ultimoParrafo = parrafo4[parrafo4.length -1];
ultimoParrafo.parentNode.removeChild(ultimoParrafo);
console.log(ultimoParrafo.textContent); //Muestra el texto eliminado

console.log("EJERCICIO 12");
const div2 = document.getElementById("contenido");
div2.textContent = "";
console.log(div2.textContent);

console.log("EJERCICIO 13");
const articulo = document.querySelector("article");
const clon = articulo.cloneNode(true);
const main = document.querySelector("main");
main.appendChild(clon);
console.log("Clon agregado");
