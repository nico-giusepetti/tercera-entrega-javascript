/* Variables */

// Lista de productos disponibles
let productos = [ { id:"aminoacidos-2", nombre: "RELIEF - AMINOACIDOS BCAA x250 capsulas SLMF LABS", precio: 9054, imagen: "./imagenes/productos/bcaa-slmflabs.jpg.webp", marca: "slmf labs"},

{ id:"aminoacidos-3", nombre: "REVIVAL - AMINOACIDOS x340 capsulas SLMF LABS", precio: 17702, imagen: "./imagenes/productos/aminoacidos-slmflabs.jpg.webp", marca: "slmf labs"},

{ id:"oxido-nitrico-1", nombre: "PROVOKE - OXIDO NÍTRICO x120 capsulas SLMF LABS", precio: 13734, imagen: "./imagenes/productos/oxido-nitrico-slmflabs.jpg.webp", marca: "slmf labs"},

{ id:"pro-hormonal-1", nombre: "MAD STRENGTH - PRO HORMONAL x60 capsulas SLMF LABS", precio: 18273, imagen: "./imagenes/productos/pro-hormonal-slmflabs.jpg.webp", marca: "slmf labs"},

{ id:"vitaminas-1", nombre: "VITAL - VITAMINAS Y MINERALES x90 capsulas SLMF LABS", precio: 11394, imagen: "./imagenes/productos/vitaminas-slmflabs.jpg.webp", marca: "slmf labs"},

{ id:"glutamina-2", nombre: "REVIVAL - GLUTAMINA 500 gr SLMF LABS", precio: 13683, imagen: "./imagenes/productos/glutamina-slmflabs.jpg.webp", marca: "slmf labs"},

{ id:"proteina-1",nombre: "PROTEINA POTE 2 Lb STAR NUTRITION", precio: 23619, imagen: "./imagenes/productos/proteina-star.jpg", marca: "star nutrition"},

{ id:"creatina-1", nombre: "CREATINA MICRONIZADA 300 GR STAR NUTRITION", precio: 23438, imagen: "./imagenes/productos/creatina-star.jpg", marca: "star nutrition"},

{ id:"quemador-1", nombre: "QUEMADOR DE GRASA x60 COMPRIMIDOS STAR NUTRITION", precio: 8718, imagen: "./imagenes/productos/quemador-star.jpg", marca: "star nutrition"},

{ id:"colageno-1", nombre: "COLÁGENO HIDROLIZADO 210 gr STAR NUTRITION", precio: 11511, imagen: "./imagenes/productos/colageno-star.jpg", marca: "star nutrition"},

{ id:"glutamina-1", nombre: "GLUTAMINA MICRONIZADA 300 gr STAR NUTRITION", precio: 17643, imagen: "./imagenes/productos/glutamina-star.jpg", marca: "star nutrition"},

{ id:"aminoacidos-1", nombre: "AMINOACIDOS RAMNIFICADOS 270 gr STAR NUTRITION", precio: 17032, imagen: "./imagenes/productos/bcaa-star.jpg", marca: "star nutrition"},

{ id:"proteina-2", nombre: "PROTEINA WHEY POTE 2 Lb ENA", precio: 28350, imagen: "./imagenes/productos/proteina-ena.webp", marca: "ena"},

{ id:"aminoacidos-4", nombre: "AMINO 4500 x150 tabs ENA", precio: 23550, imagen: "./imagenes/productos/aminoacidos-ena.webp", marca: "ena"},

{ id:"aminoacidos-5", nombre: "AMINOACIDOS RAMNIFICADOS BCAA 12:1:1 x120 caps. ENA", precio: 13450, imagen: "./imagenes/productos/bcaa-ena.webp", marca: "ena"},

{ id:"colageno_2", nombre: "COLÁGENO HIDROLIZADO 407 gr ENA", precio: 28350, imagen: "./imagenes/productos/colageno-ena.webp", marca: "ena"},

{ id:"creatina-2",nombre: "CREATINA MICRONIZADA 300 gr ENA", precio: 31700, imagen: "./imagenes/productos/creatina-ena.webp", marca: "ena"},

{ id:"glutamina-3", nombre: "GLUTAMINA MICRONIZADA 300 gr ENA", precio: 28900, imagen: "./imagenes/productos/glutamina-ena.webp", marca: "ena"},

{ id:"oxido-nitrico-2", nombre: "ÓXIDO NÍTRICO 210 gr ENA", precio: 15500, imagen: "./imagenes/productos/oxido-nitrico-ena.webp", marca: "ena"},

{ id:"pre-entreno-1", nombre: "PRE WAR 400 gr ENA", precio: 27550, imagen: "./imagenes/productos/pre-entreno-ena.webp", marca: "ena"},

{ id:"vitaminas-2", nombre: "MULTIVITAMÍNICO x60 comprimidos ENA", precio: 11350, imagen: "./imagenes/productos/vitaminas-ena.webp", marca: "ena"}
]



const contenedorProductos = document.querySelector("#contenedor-productos");
console.log(contenedorProductos);

const botonesMarca = document.querySelectorAll(".btn_marca");

let agregarCarrito = document.querySelector(".agregar_carrito");

let numeroCarrito = document.querySelector("#numero-carrito");

let carrito = [];

let nuevoContadorCarrito = 0;

const form = document.querySelector("#form");

const formInput = document.querySelector("#form-input");

console.log(contenedorProductos);
console.log(botonesMarca);
console.log(agregarCarrito);
console.log(numeroCarrito);
console.log(carrito);
console.log(nuevoContadorCarrito);
console.log(form);
console.log(formInput);


/* INICIO */

// Llamar a la funcion y mostrar todos los productos
cargarProductos(productos);

// Cargar los productos, se cargan los elementos html 
function cargarProductos(productosElegidos) { 
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("cajas__productos")
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="productos__img">
            <h2 class="cajas__productos__titulo">${producto.nombre}</h2>
            <p class="cajas__productos__parrafo">
            <a href="" class="cajas__productos__button">$${producto.precio} ARS</a>
            <p class="cajas__productos__parrafo__descripcion">  </p>
            </p>
            <div class="div__productos-agregar"> <button class="agregar_carrito" id="${producto.id}">Agregar al carrito<i class="bi bi-cart-plus-fill"></i></button> </div>
        `

        contenedorProductos.append(div);
    })

    renovarAgregarCarrito()
}

// Filtrado por marca del producto, o para mostrar todos los productos (segun opcion elegida)
botonesMarca.forEach(boton => {
    boton.addEventListener("click", (e) => {

        if (e.currentTarget.id != "todos_los_productos") { //Si e.currentTarget.id al hacer "click" es diferente a "todos__los__productos", es porque NO se clickeo la opcion "todos los productos" 
            const marcaProductos = productos.filter(producto => producto.marca === e.currentTarget.id); //e.currentTarget.id esto nos trae el id del elementos html que seria de la seccion correspondiente
            cargarProductos(marcaProductos);
        } else {
            cargarProductos(productos); // De esta forma al poner (productos como parametro), se cargan TODOS los productos de la tienda.
        }
        console.log(e.currentTarget.id)
    })
    
})


// Agregar los productos al carrito
function renovarAgregarCarrito() {

    agregarCarrito = document.querySelectorAll(".agregar_carrito");

    agregarCarrito.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

function agregarAlCarrito(e) {
    let idProducto = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idProducto);

    if (carrito.some(producto => producto.id === idProducto)) { //por si ya hay este mismo producto en el carrito
        const index = carrito.findIndex(producto => producto.id === idProducto);
        carrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        carrito.push(productoAgregado);
    }

    Swal.fire({

        title: "Producto agregado al carrito",
        html: `
        <div>
            <img src="${productoAgregado.imagen}" style="max-width: 50%;">
            <p style="font-family: 'Quicksand', sans-serif;">${productoAgregado.nombre}</p>
            <p style="font-family: 'Quicksand', sans-serif;">Precio: $${productoAgregado.precio} ARS</p>
        </div>
        `,
        icon: "success",
        customClass: {
            title: `alert__font`,
        },
        confirmButtonText: 'Aceptar'

    });

    localStorage.setItem("clave-carrito", JSON.stringify(carrito));
}


// Barra de busqueda de productos
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valorInput = formInput.value.toLowerCase();

    let productosEncontrados = productos.filter(producto => producto.nombre.toLowerCase().includes(valorInput));
    console.log(productosEncontrados);
    if (productosEncontrados.length > 0) {
        cargarProductos(productosEncontrados); // Mostrar solo los productos encontrados
    } else {
        contenedorProductos.innerHTML = ` <p style="font-family: 'Quicksand', sans-serif; font-size: 1.40rem;"> No se encontraron los productos... </p> `; // Mostrar un mensaje de q no se encontraron productos
    }
});

/* FIN */
