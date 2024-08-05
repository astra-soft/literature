// src/managers/author.manager.ts

// ? interfaces
import { TId } from '@interfaces';
// ? models
import { Author } from '@models';
// ? managers
import { BookManager, TomManager } from '@managers';

export class AuthorManager {
	private authors: Author[] = [];
	private bookManager: BookManager;
	private tomManager: TomManager;

	constructor(bookManager: BookManager, tomManager: TomManager) {
		this.bookManager = bookManager;
		this.tomManager = tomManager;
	}

	createAuthor(id: TId, firstName: string, lastName: string): Author {
		const author = new Author(id, firstName, lastName);
		this.authors.push(author);
		return author;
	}

	getAuthorById(id: TId): Author | undefined {
		return this.authors.find(author => author.id === id);
	}

	getAllAuthors(): Author[] {
		return this.authors;
	}

	addBookToAuthor(authorId: TId, bookId: TId) {
		const author = this.getAuthorById(authorId);
		const book = this.bookManager.getBookById(bookId);

		if (author && book) {
			author.addBook(bookId);
		} else {
			throw new Error(
				`Author or Book not found (Author ID: ${authorId}, Book ID: ${bookId})`
			);
		}
	}

	addTomToAuthor(authorId: TId, tomId: TId) {
		const author = this.getAuthorById(authorId);
		const tom = this.tomManager.getTomById(tomId);

		if (author && tom) {
			author.addTom(tomId);
		} else {
			throw new Error(
				`Author or Tom not found (Author ID: ${authorId}, Tom ID: ${tomId})`
			);
		}
	}
}
