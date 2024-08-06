// src/managers/book.manager.ts

// ? interfaces
import { IBook, IBookManager, TId } from '@interfaces';
// ? managers
import { BaseManager } from '@managers';
// ? models
import { Book } from '@models';

export class BookManager extends BaseManager<IBook> implements IBookManager {
	/**
	 * create one new book
	 * @param text - string
	 * @param authorId - id of author
	 * @returns book
	 */
	createOneBook(text: string, authorId: TId): Book {
		const book = new Book(this._generateId(), text, authorId);
		this.entities.push(book);
		return book;
	}
}
