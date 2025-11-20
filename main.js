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

console.log("EJERCICIO 14");
const primerUl = document.querySelector("ul");
const ultimoLi = primerUl.lastElementChild;
primerUl.insertBefore(ultimoLi, primerUl.firstElementChild);
console.log("Último elemento movido al inicio:" + ultimoLi.textContent);

console.log("EJERCICIO 15");
const contenedor = document.querySelector("section");
const parrafos2 = Array.from(contenedor.querySelectorAll("p"));
parrafos2.sort((a, b) => a.textContent.localeCompare(b.textContent));
parrafos2.forEach(p => contenedor.appendChild(p));
console.log("Párrafos reordenados:");
parrafos2.forEach(p => console.log(p.textContent));

console.log("EJERCICIO 16");
const secciones = document.querySelectorAll("section");
secciones.forEach(function(section, index){
    section.setAttribute("data-index", index);
    console.log("Sección " + index + " → data-index=" + section.getAttribute("data-index"));
});

console.log("EJERCICIO 17");
const divs = document.querySelectorAll("div");
const cantidad = divs.length;
const nuevoParrafo2 = document.createElement("p");
nuevoParrafo2.textContent = "Cantidad de divs en el documento: " + cantidad;
document.body.appendChild(nuevoParrafo2);
console.log("Nuevo párrafo creado con la cantidad de divs: " + cantidad);

console.log("EJERCICIO 18");
const ul2 = document.createElement("ul");
const cantidadLi = 5;
for (let i = 0; i < cantidadLi; i++) {
    const li = document.createElement("li");          
    const span = document.createElement("span");      
    span.textContent = "Nivel interno";              
    li.appendChild(span);                           
    ul2.appendChild(li);                            
}
document.body.appendChild(ul2);
console.log("Lista con spans creada: " + ul2);

console.log("EJERCICIO 19");
const contenedor2 = document.getElementById("contenedor");
for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = "Párrafo " + i;
    contenedor2.appendChild(p);
}
const parrafos3 = contenedor2.querySelectorAll("p");
contenedor2.removeChild(parrafos3[1]);
console.log("Segundo párrafo eliminado.");

console.log("EJERCICIO 20");
const seccion = document.querySelector("section");

const nuevoH2 = document.createElement("h2");
nuevoH2.textContent = "Título nuevo";

const nuevoP = document.createElement("p");
nuevoP.textContent = "Descripción generada";

const nuevaUl = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Ítem " + i;
    nuevaUl.appendChild(li);
}

seccion.appendChild(nuevoH2);
seccion.appendChild(nuevoP);
seccion.appendChild(nuevaUl);

const h2Original = seccion.querySelectorAll("h2");
if (h2Original.length > 1) {
    seccion.removeChild(h2Original[0]); // Elimina el original
}
console.log("Se agregaron nuevo h2, p, ul y se eliminó el h2 original si existía.");