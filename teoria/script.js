// @ts-nocheck

var miElemento = document.getElementById( "mi-id" )

var miElemento2 = document.getElementsByClassName( "mis-clases" )[0]
var miElemento21 = document.getElementsByClassName( "mis-clases" )

var miElemento3 = document.querySelector( "#mi-id2" )
var misElementos4 = document.querySelectorAll( ".mi-clase" )
var miElemento5 = document.querySelector( ".mi-clase" )

function saludar() { 
  console.log("Hola mundo")
}


miElemento3.innerHTML = `<script>${console.log( "Hola mundo" ) }</script>`


let nuevoElemento = document.createElement( 'h1' )

nuevoElemento.innerText = "Este titulo lo creamos en JS"

miElemento5.appendChild(miElemento3)

document.body.appendChild( nuevoElemento )



var elementoPadre = document.getElementsByTagName('body')[0]
var elementoAEliminar = miElemento2

console.log( elementoAEliminar.parentNode )
console.log( elementoPadre )


elementoPadre.removeChild(elementoAEliminar)



nuevoElemento.style.color = "blue"


nuevoElemento.style.background = "yellow"


nuevoElemento.style = "border: 1px solid black; background: green; color:white; padding: 2rem"


nuevoElemento.classList.add('opacity-25')



