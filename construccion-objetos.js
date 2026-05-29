//Ejercicio 1: Libro (Objeto básico + if)
 
function Libro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
 
    this.prestar = function(){
        if(!this.prestado){
            this.prestado = true;
        }else{
            console.log(`El libro ${this.titulo} del autor ${this.autor} se encuentra prestado`);
        }
    }
}
 
let libro1 = new Libro('El señor de los anillos','J.R.R tolkien');
 
console.log(libro1);
 
libro1.prestar();
console.log(libro1);
libro1.prestar();
 
// Ejercicio 2: Lista de Compras (Array + for)
 
function ListaCompras(){
    this.productos = [];
 
    this.agregar = function(producto){
        this.productos.push(producto);
    }
 
    this.mostrar = function(){
        for(let i = 0; i < this.productos.length; i++){
            console.log(`${i+1} ${this.productos[i]}`);
        }
    }
 
}
 
let listaCompras = new ListaCompras();
listaCompras.agregar('Pan tajado');
listaCompras.agregar('manzanas');
listaCompras.agregar('Leche');
 
listaCompras.mostrar();
 
// Ejercicio 3: Reproductor de Música
 
function Reproductor(){
    this.estado = 'detenido';
 
    this.play = function(){
        if(this.estado === 'detenido' || this.estado === 'pausado'){
            this.estado = 'reproduciendo';
            console.log('Reproduciendo música...');        
        }else if(this.estado === 'reproduciendo'){
            console.log('Ya se está reproduciendo música.');  
        }
    }
 
    this.pausar = function(){
        if(this.estado === 'reproduciendo'){
            this.estado = 'pausado';
            console.log("Música pausada.");
        }else{
            console.log("No hay música reproduciéndose.");
        }    
    }
 
    this.detener = function(){
        this.estado = 'detenido';
        console.log("Música detenida.");
    }
}
 
let reproductor = new Reproductor();
 
console.log(reproductor);
 
reproductor.play();
 
console.log(reproductor);
 
reproductor.play();
 
console.log(reproductor);
 
reproductor.pausar();
 
console.log(reproductor);
 
reproductor.pausar();
 
console.log(reproductor);
 
reproductor.detener();
 
console.log(reproductor);
 
//Ejercicio 4: Carrito de Compras con Descuentos (manejo de estados en un objeto usando métodos y condicionales (if/else).
 
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}
 
 
function Carrito(){
    this.productos = [];
    this.total = 0;
 
    this.agregarProducto = function(nombre, precio){
        let producto = new Producto(nombre, precio);
        this.productos.push(producto);
        this.total += precio;
    }
 
    this.calcularDescuento = function(){
        let descuento = 0;
       
        if(this.total > 100){
            this.descuento = this.total * 10/100;
            this.total -= this.descuento;
            console.log(`Total con descuento del 10% ${this.total}`);
 
        }else if(this.total > 50 && this.total <= 100){
            this.descuento = this.total * 5/100;
            this.total -= this.descuento;
            console.log(`Total con descuento de 5% ${this.total}`);
           
        }else{
            console.log(`Total sin descuento ${this.total}`);
        }
 
 
    }
}
 
let carrito = new Carrito();
carrito.agregarProducto('audifonos',15);
carrito.agregarProducto('mouse pad',9);
carrito.agregarProducto('teclado ergonomico',50);
carrito.agregarProducto('Portatil',400);
 
console.log(carrito);
 
carrito.calcularDescuento();