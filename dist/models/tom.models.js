"use strict";
// src/models/tom.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tom = void 0;
class Tom {
    constructor(id, booksId, authorId) {
        this.id = id;
        this.booksId = booksId;
        this.authorId = authorId;
        this.creationDate = new Date(); // The date of creation set automatically
    }
}
exports.Tom = Tom;
