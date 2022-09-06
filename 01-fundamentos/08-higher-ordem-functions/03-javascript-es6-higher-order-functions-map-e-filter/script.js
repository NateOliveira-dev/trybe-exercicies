const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

//   1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

function formatedBookNames() {
    let newArr = books.map((element) => `Nome do livro: ${element.name} - Gênero: ${element.genre} - Autor: ${element.author.name}`);
    return newArr;
};
// console.log(formatedBookNames());

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
// Dica: use as funções map, sort

function nameAndAge() {
    let newArr2 = books.map((element) => (
        {
            author: element.author.name,
            age: element.releaseYear - element.author.birthYear,
        }
    ));
    return newArr2.sort((obj1, obj2) => obj1.age - obj2.age);
};
// console.log(nameAndAge());

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;

function fantasyOrScienceFiction() {
    return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
};
// console.log(fantasyOrScienceFiction());

// 4 - Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
// Dica: use as funções filter e sort

function oldBooksOrdered() {
    return books.filter((book) => {
        let ageDiference = 2022 - book.releaseYear;
        if (ageDiference >= 60) {
            return book;
        }
    }).sort((obj1, obj2) => obj1 - obj2);
};
// console.log(oldBooksOrdered());

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors() {
    const livrosFiltrados = books.filter((book) => {
        return book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
    });
    const nomeAutores = livrosFiltrados.map((autores) => autores.author.name);
    const nomesOrdenados = nomeAutores.sort();
    return nomesOrdenados;
};
// console.log(fantasyOrScienceFictionAuthors());

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks() {
    const booksFill = books.filter((book) => {
        return book.releaseYear <= 1962
    });
    const nameBooksOnly = booksFill.map((nameBooks) => nameBooks.name)
    return nameBooksOnly
};
// console.log(oldBooks());

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

function authorWith3DotsOnName() {
    const searchAuthor = books.filter((book) => {
        return book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.'
    });
    const bookName = searchAuthor.map((bookName) => bookName.name);
    return bookName;
};
// console.log(authorWith3DotsOnName());