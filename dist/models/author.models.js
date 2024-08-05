"use strict";
// src/models/author.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
class Author {
    constructor(id, firstName, lastName) {
        this.booksId = [];
        this.tomsId = [];
        this.id = id;
        this.profile = { firstName, lastName };
        this.meta = { countOfBooks: 0, countOfToms: 0 };
    }
    addBook(bookId) {
        this.booksId.push(bookId);
        this.meta.countOfBooks++;
    }
    addTom(tomId) {
        this.tomsId.push(tomId);
        this.meta.countOfToms++;
    }
}
exports.Author = Author;
// // export class Author {
// export class Author implements IAuthor {
// 	private authors: IAuthor[];
// 	constructor() {
// 		this.authors = [];
// 	}
// 	private initMeta(): IAuthorMeta {
// 		const meta = {
// 			countOfBooks: 0,
// 			countOfToms: 0
// 		};
// 		return meta;
// 	}
// 	private getNextId(): TId {
// 		// until we don't have logic to delete authors, we can use this method
// 		// example [item0, item1, item2] - length is 3, so next id will be 3
// 		return this.authors.length;
// 	}
// 	createAuthor(firstName: string, lastName: string): IAuthor {
// 		const author = {
// 			id: this.getNextId(),
// 			profile: {
// 				firstName: firstName, // in this project we don't have any validation, so we can do like this
// 				lastName: lastName
// 			},
// 			booksId: [],
// 			tomsId: [],
// 			meta: this.initMeta()
// 		};
// 		return author;
// 	}
// 	getAllAuthor(): IAuthor[] {
// 		// like request to dataBase
// 		const authors = this.authors;
// 		return authors;
// 	}
// 	getAuthorById(id: TId): IAuthor {
// 		// like request to dataBase
// 		const author = this.authors.find(author => author.id === id);
// 		if (!author) throw new Error(`Author with id: ${id}, not found`);
// 		return author;
// 	}
// 	addTomToAuthorById(authorId: TId, tomId: TId): IAuthor {
// 		// like request to dataBase
// 		const author = this.getAuthorById(authorId);
// 		author.tomsId.push(tomId);
// 		return author;
// 	}
// }
