// src/managers/book.manager.ts

// ? interfaces
import { IBookManager, TId } from '@interfaces';
// ? models
import { Book } from '@models';

export class BookManager implements IBookManager {
	private books: Book[] = [];

	/**
	 *
	 * @returns id - next id for book
	 */
	_generateId(): TId {
		return this.books.length > 0
			? // take the last book and increment his id by one
			  this.books[this.books.length - 1].id + 1
			: 1;
	}

	/**
	 * create one new book
	 * @param text - string
	 * @param authorId - id of author
	 * @returns book
	 */
	createOneBook(text: string, authorId: TId): Book {
		const book = new Book(this._generateId(), text, authorId);
		this.books.push(book);
		return book;
	}

	/**
	 * try to find book by id
	 * @param id - id of book
	 * @returns book - or undefined
	 */
	getBookById(id: TId): Book | undefined {
		return this.books.find(book => book.id === id);
	}

	/**
	 *
	 * @returns array of books
	 */
	getAllBooks(): Book[] {
		return this.books;
	}
}
