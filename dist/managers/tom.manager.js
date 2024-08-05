"use strict";
// src/manager/tom.manager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TomManager = void 0;
// ? model
const _models_1 = require("@models");
class TomManager {
    constructor(bookManager) {
        this.toms = [];
        this.bookManager = bookManager;
    }
    createTom(id, booksId, authorId) {
        // Проверяем, что все книги существуют
        booksId.forEach(bookId => {
            if (!this.bookManager.getBookById(bookId)) {
                throw new Error(`Book not found (Book ID: ${bookId})`);
            }
        });
        const tom = new _models_1.Tom(id, booksId, authorId);
        this.toms.push(tom);
        return tom;
    }
    getTomById(id) {
        return this.toms.find(tom => tom.id === id);
    }
    getAllToms() {
        return this.toms;
    }
}
exports.TomManager = TomManager;
