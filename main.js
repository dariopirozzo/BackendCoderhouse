class Usuario {

    constructor(nombre, apellido) {

        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = [],
        this.mascotas = []

    }

    getFullName() {
        return `Usuario: ${this.nombre} ${this.apellido}`;
    }

    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
    }

    countMascotas() {
        let contadorMascotas = this.mascotas.length;
        return `Cantidad de Masotas: ${contadorMascotas}`;
    }

    addBook(titulo, autor) {
        this.libros.push({nombreLibro: titulo, nombreAutor: autor});
    }

    getBookNames() {
        // Con un for
        // let titulosLibros = [];
        
        // for (let i = 0; i < this.libros.length; i++) {
        //     titulosLibros.push(this.libros[i].nombreLibro);            
        // }

        // return `Titulos de libros: ${titulosLibros}`;
        
        
        // Con un map
        let titulosLibros = this.libros.map(function(libro) {
            return libro.nombreLibro;
        });

        return `Titulos de libros: [${titulosLibros}]`;
        
    }

}

let usuario1 = new Usuario("Dario", "Pirozzo");

console.log(usuario1.getFullName());
usuario1.addMascota("perrito");
usuario1.addMascota("perro");
usuario1.addMascota("gato");
usuario1.addMascota("Caballo");
usuario1.addBook("El señor de las moscas", "William Golding");
usuario1.addBook("Fundacion", "Isaac Asimov");
console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());