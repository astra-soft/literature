// src/manager/tom.manager.ts

// ? interface
import { ITomManager, TId } from '@interfaces';
// ? model
import { Tom } from '@models';
// ? manager
import { BookManager } from '@managers';

export class TomManager implements ITomManager {
	private toms: Tom[] = [];
	private bookManager: BookManager;

	constructor(bookManager: BookManager) {
		this.bookManager = bookManager;
	}

	/**
	 *
	 * @returns next id for tom
	 */
	_generateId(): TId {
		return this.toms.length > 0
			? // take the last tom and increment his id by one
			  this.toms[this.toms.length - 1].id + 1
			: 1;
	}

	/**
	 * create one new tom
	 * @param booksId - an array of books id
	 * @param authorId - id of author
	 * @returns book
	 */
	createOneTom(booksId: TId[], authorId: TId): Tom {
		// Проверяем, что все книги существуют
		booksId.forEach(bookId => {
			if (!this.bookManager.getBookById(bookId)) {
				throw new Error(`Book not found (Book ID: ${bookId})`);
			}
		});

		const tom = new Tom(this._generateId(), booksId, authorId);
		this.toms.push(tom);
		return tom;
	}

	/**
	 * try to find tom by id
	 * @param id - id of tom
	 * @returns tom - or undefined
	 */
	getTomById(id: TId): Tom | undefined {
		return this.toms.find(tom => tom.id === id);
	}

	/**
	 *
	 * @returns array of toms
	 */
	getAllToms(): Tom[] {
		return this.toms;
	}
}
