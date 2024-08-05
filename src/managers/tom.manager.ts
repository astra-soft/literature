// src/manager/tom.manager.ts

// ? interface
import { TId } from '@interfaces';
// ? model
import { Tom } from '@models';
// ? manager
import { BookManager } from '@managers';

export class TomManager {
	private toms: Tom[] = [];
	private bookManager: BookManager;

	constructor(bookManager: BookManager) {
		this.bookManager = bookManager;
	}

	createTom(id: TId, booksId: TId[], authorId: TId): Tom {
		// Проверяем, что все книги существуют
		booksId.forEach(bookId => {
			if (!this.bookManager.getBookById(bookId)) {
				throw new Error(`Book not found (Book ID: ${bookId})`);
			}
		});

		const tom = new Tom(id, booksId, authorId);
		this.toms.push(tom);
		return tom;
	}

	getTomById(id: TId): Tom | undefined {
		return this.toms.find(tom => tom.id === id);
	}

	getAllToms(): Tom[] {
		return this.toms;
	}
}
