'use strict';
require('module-alias/register');
Object.defineProperty(exports, '__esModule', { value: true });
const managers_1 = require('@managers');
// Создадим менеджеры
const bookManager = new managers_1.BookManager();
const tomManager = new managers_1.TomManager(bookManager);
const authorManager = new managers_1.AuthorManager(bookManager, tomManager);
// Создадим несколько авторов
const author1 = authorManager.createAuthor(1, 'John', 'Doe');
const author2 = authorManager.createAuthor(2, 'Jane', 'Smith');
// Создадим несколько книг
const book1 = bookManager.createBook(1, 'Book 1 Text', author1.id);
const book2 = bookManager.createBook(2, 'Book 2 Text', author1.id);
const book3 = bookManager.createBook(3, 'Book 3 Text', author2.id);
// Добавим книги к авторам
authorManager.addBookToAuthor(author1.id, book1.id);
authorManager.addBookToAuthor(author1.id, book2.id);
authorManager.addBookToAuthor(author2.id, book3.id);
// Создадим несколько томов
const tom1 = tomManager.createTom(1, [book1.id, book2.id], author1.id);
const tom2 = tomManager.createTom(2, [book3.id], author2.id);
// Добавим тома к авторам
authorManager.addTomToAuthor(author1.id, tom1.id);
authorManager.addTomToAuthor(author2.id, tom2.id);
// Выводим данные для проверки
console.log('Authors:', authorManager.getAllAuthors());
console.log('Books:', bookManager.getAllBooks());
console.log('Toms:', tomManager.getAllToms());
// Поиск по ID
console.log('Author by ID (1):', authorManager.getAuthorById(1));
console.log('Book by ID (1):', bookManager.getBookById(1));
console.log('Tom by ID (1):', tomManager.getTomById(1));
