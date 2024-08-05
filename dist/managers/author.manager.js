"use strict";
// src/managers/author.manager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorManager = void 0;
// ? models
const _models_1 = require("@models");
class AuthorManager {
    constructor(bookManager, tomManager) {
        this.authors = [];
        this.bookManager = bookManager;
        this.tomManager = tomManager;
    }
    createAuthor(id, firstName, lastName) {
        const author = new _models_1.Author(id, firstName, lastName);
        this.authors.push(author);
        return author;
    }
    getAuthorById(id) {
        return this.authors.find(author => author.id === id);
    }
    getAllAuthors() {
        return this.authors;
    }
    addBookToAuthor(authorId, bookId) {
        const author = this.getAuthorById(authorId);
        const book = this.bookManager.getBookById(bookId);
        if (author && book) {
            author.addBook(bookId);
        }
        else {
            throw new Error(`Author or Book not found (Author ID: ${authorId}, Book ID: ${bookId})`);
        }
    }
    addTomToAuthor(authorId, tomId) {
        const author = this.getAuthorById(authorId);
        const tom = this.tomManager.getTomById(tomId);
        if (author && tom) {
            author.addTom(tomId);
        }
        else {
            throw new Error(`Author or Tom not found (Author ID: ${authorId}, Tom ID: ${tomId})`);
        }
    }
}
exports.AuthorManager = AuthorManager;
