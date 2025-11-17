console.log("EJERCICIO 01");
const subtitulo = document.querySelector("h2");
console.log(subtitulo.textContent);

console.log("EJERCICIO 02");
const parrafos = document.querySelectorAll("p");
parrafos.forEach(p => {
    p.textContent = "Texto actualizado"
    console.log(p.textContent);
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