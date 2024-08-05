"use strict";
// src/models/book.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(id, text, authorId) {
        this.id = id;
        this.text = text;
        this.creationDate = new Date(); // The date of creation set automatically
        this.authorId = authorId;
    }
}
exports.Book = Book;
