// src/manager/tom.manager.ts

// ? interface
import { ITom, ITomManager, TId } from '@interfaces';
// ? model
import { Tom } from '@models';
// ? manager
import { BaseManager, BookManager } from '@managers';

export class TomManager extends BaseManager<ITom> implements ITomManager {
	private bookManager: BookManager;

	constructor(bookManager: BookManager) {
		super();
		this.bookManager = bookManager;
	}

	/**
	 * create one new tom
	 * @param booksId - an array of books id
	 * @param authorId - id of author
	 * @returns book
	 */
	createOne(booksId: TId[], authorId: TId): Tom {
		// Проверяем, что все книги существуют
		booksId.forEach(bookId => {
			if (!this.bookManager.getOneById(bookId)) {
				throw new Error(`Book not found (Book ID: ${bookId})`);
			}
		});

		const tom = new Tom(this._generateId(), booksId, authorId);
		this.entities.push(tom);
		return tom;
	}
}
