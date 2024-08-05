"use strict";
// src/managers/book.manager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManager = void 0;
// ? models
const _models_1 = require("@models");
class BookManager {
    constructor() {
        this.books = [];
    }
    createBook(id, text, authorId) {
        const book = new _models_1.Book(id, text, authorId);
        this.books.push(book);
        return book;
    }
    getBookById(id) {
        return this.books.find(book => book.id === id);
    }
    getAllBooks() {
        return this.books;
    }
}
exports.BookManager = BookManager;
