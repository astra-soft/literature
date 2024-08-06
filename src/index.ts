// in main ts file need to connect alias
import 'module-alias/register';

// ? managers
import { AuthorManager, BookManager, TomManager } from '@managers';

// Create managers
const bookManager = new BookManager();
const tomManager = new TomManager(bookManager);
const authorManager = new AuthorManager(bookManager, tomManager);

// Create a few authors
const author1 = authorManager.createOne('John', 'Doe');
const author2 = authorManager.createOne('Jane', 'Smith');

// Create a few books
const book1 = bookManager.createOneBook('Book 1 Text', author1.id);
const book2 = bookManager.createOneBook('Book 2 Text', author1.id);
const book3 = bookManager.createOneBook('Book 3 Text', author2.id);

// Add some books to authors
authorManager.addBookToAuthorById(author1.id, book1.id);
authorManager.addBookToAuthorById(author1.id, book2.id);
authorManager.addBookToAuthorById(author2.id, book3.id);

// Create a few toms
const tom1 = tomManager.createOne([book1.id, book2.id], author1.id);
const tom2 = tomManager.createOne([book3.id], author2.id);

// Add some toms to authors
authorManager.addTomToAuthorById(author1.id, tom1.id);
authorManager.addTomToAuthorById(author2.id, tom2.id);

// console data to check
console.log('Authors:', authorManager.getAll());
console.log('Books:', bookManager.getAll());
console.log('Toms:', tomManager.getAll());

// Find by ID
console.log('Author by ID (1):', authorManager.getOneById(1));
console.log('Book by ID (1):', bookManager.getOneById(1));
console.log('Tom by ID (1):', tomManager.getOneById(1));
