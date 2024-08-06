// src/managers/author.manager.ts

// ? interfaces
import { IAuthor, TId, IAuthorManager } from '@interfaces';
// ? models
import { Author } from '@models';
// ? managers
import { BookManager, TomManager } from '@managers';

export class AuthorManager implements IAuthorManager {
	private authors: IAuthor[] = [];
	private bookManager: BookManager;
	private tomManager: TomManager;

	/**
	 *
	 * @returns id - next id for author
	 */
	_generateId(): TId {
		return this.authors.length > 0
			? // take the last author and increment his id by one
			  this.authors[this.authors.length - 1].id + 1
			: 1;
	}

	constructor(bookManager: BookManager, tomManager: TomManager) {
		this.bookManager = bookManager;
		this.tomManager = tomManager;
	}

	/**
	 * create a new one author
	 * @param firstName - string, could be empty
	 * @param lastName - string, could be empty
	 * @returns author
	 */
	createOneAuthor(firstName: string, lastName: string): IAuthor {
		const author = new Author(this._generateId(), firstName, lastName);
		this.authors.push(author);
		return author;
	}

	/**
	 * get one author by his id from storage
	 * @param id - unique identification
	 * @returns author or undefined
	 */
	getAuthorById(id: TId): IAuthor | undefined {
		return this.authors.find(author => author.id === id);
	}

	/**
	 * get all authors from storage
	 * @returns an array of authors
	 */
	getAllAuthors(): IAuthor[] {
		// like request to dataBase
		const authors = this.authors;

		return authors;
	}

	/**
	 * add book to author
	 * @param authorId - id of author
	 * @param bookId - id of book
	 */
	addBookToAuthorById(authorId: TId, bookId: TId): void {
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

	/**
	 * add tom to author
	 * @param authorId - id of author
	 * @param tomId - id of tom
	 */
	addTomToAuthorById(authorId: TId, tomId: TId): void {
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
