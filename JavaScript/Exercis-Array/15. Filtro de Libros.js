const Libros = [
    {
        titulo: "El Señor de los Anillos",
        autor: "J.R.R. Tolkien",
        año = 1954
    },
    {
        titulo: "Harry Potter y la Piedra filosofal",
        autor: "J.K. Rowling",
        año = 1997
    },
    {
        titulo: "Cien años de Soledad",
        autor: "Gabriel Garcia Marquez",
        año = 1967
    },
    {
        titulo: "El codigo Da Vinci",
        autor: "Dan Brown",
        año = 2003
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        año = 1949
    },
    {
        titulo: "El Hobbit",
        autor: "J.R.R. Tolkien",
        año = 1937
    }
];

const librosPost2000 = libros.filter(libro => libro.year > 2000);
const titleUp = librosPost2000.map(libro => libro.titulo.toUpperCase());
console.log(titleUp);