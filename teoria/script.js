// @ts-nocheck

var miElemento = document.getElementById( "mi-id" )

var miElemento2 = document.getElementsByClassName( "mis-clases" )[ 0 ]
var miElemento21 = document.getElementsByClassName( "mis-clases" )

var miElemento3 = document.querySelector( "#mi-id2" )
var misElementos4 = document.querySelectorAll( ".mi-clase" )
var miElemento5 = document.querySelector( ".mi-clase" )

function saludar() {
  console.log( "Hola mundo" )
}


miElemento3.innerHTML = `<script>${console.log( "Hola mundo" )}</script>`


let nuevoElemento = document.createElement( 'h1' )

nuevoElemento.innerText = "Este titulo lo creamos en JS"

miElemento5.appendChild( miElemento3 )

document.body.appendChild( nuevoElemento )



var elementoPadre = document.getElementsByTagName( 'body' )[ 0 ]
var elementoAEliminar = miElemento2

console.log( elementoAEliminar.parentNode )
console.log( elementoPadre )


elementoPadre.removeChild( elementoAEliminar )



nuevoElemento.style.color = "blue"


nuevoElemento.style.background = "yellow"


nuevoElemento.style = "border: 1px solid black; background: green; padding: 2rem"

nuevoElemento.classList.add( 'opacity-45' )

nuevoElemento.classList.add( 'text-black' )

nuevoElemento.classList.remove( 'opacity-45' )


let nuevaEtiquetaAnchor = document.createElement( 'a' )

nuevaEtiquetaAnchor.innerText = "Mi etiqueta anchor"

document.body.appendChild( nuevaEtiquetaAnchor )


nuevaEtiquetaAnchor.setAttribute( 'href', "/ruta-web" )



// crear un nuevo elemento imagen 

//y lo vamos a agregar al dom

// vamos a definir el atributo para que muestre una imagen 


const imagen = document.createElement( 'img' )

imagen.setAttribute( 'src', 'https://cdn.pixabay.com/photo/2017/01/15/19/04/red-panda-1982445_1280.jpg' )

imagen.style = 'max-width:100%; display:block; width:150px; height:150px '

document.body.appendChild( imagen )




var nuevoBoton = document.createElement( 'button' )
nuevoBoton.style = 'border: 1px solid black; padding:1rem;margin:2rem'

nuevoBoton.type = "button"

nuevoBoton.textContent = 'Hazme click!'

document.body.appendChild( nuevoBoton )


nuevoBoton.addEventListener( 'click', function () {
  imagen.src = "https://cdn.pixabay.com/photo/2013/07/12/15/30/penguin-149971_1280.png"
} )

nuevoBoton.addEventListener( 'dblclick', function () {
  imagen.src = "https://cdn.pixabay.com/photo/2015/03/21/06/37/monitor-683248_1280.jpg"
} )



window.onload = () => {
  console.log( "Tu te ejecutas primero que todos!!!" )
}


imagen.onclick = () => {
  console.log( "Click en la imagen" )
}


let nuevoInput = document.createElement( 'input' )

nuevoInput.placeholder = 'Hola soy nuevo input'

document.body.appendChild( nuevoInput )


nuevoInput.onkeydown = () => {
  console.log( "Hola mundo" )
}

nuevoInput.onfocus = () => {
  console.log( "Estoy enfocado" )
}


nuevoInput.addEventListener( 'click', () => {
  console.log( "Le hice click al input" )
} )




let ul = document.createElement( 'ul' )

let items = [ 'elemento1', 'elemento2', 'elemento3' ]

items.map( item => {
  let li = document.createElement( 'li' )
  li.innerText = item;
  ul.appendChild( li )
} )

//recorre sobre el array original 
// esta mofidificando "mi fuente de la verdad"
// esto es malo , porque puede causar errores o bugs , al modificar "algo en caliente"
items.forEach( item => {
  let li = document.createElement( 'li' )
  li.innerText = item;
  ul.appendChild( li )
} )


document.body.appendChild( ul )


// modal version taildwindcss
const miBotonModal = document.getElementById( "abrirModal" )
const miModal = document.getElementById( "miModal" )
const cerrarModal = document.getElementById( "cerrarModal" )

miBotonModal.onclick = () => {
  miModal.classList.remove( 'hidden' )
}

cerrarModal.onclick = () => {
  miModal.classList.add( 'hidden' )
}



// modal version css
const miBotonModal2 = document.getElementById( "abrirModal2" )
const miModal2 = document.getElementById( "miModal2" )
const cerrarModal2 = document.getElementById( "cerrarModal2" )

miBotonModal2.onclick = () => {
  miModal2.style.visibility = "visible"
}

cerrarModal2.onclick = () => {
  miModal2.style.visibility = "hidden"
}



// modal version 2css
const miBotonModal3 = document.getElementById( "abrirModal3" )
const miModal3 = document.getElementById( "miModal3" )
const cerrarModal3 = document.getElementById( "cerrarModal3" )

miBotonModal3.onclick = () => {
  miModal3.style.visibility = "visible"
}

cerrarModal3.onclick = () => {
  miModal3.style.visibility = "hidden"
}


