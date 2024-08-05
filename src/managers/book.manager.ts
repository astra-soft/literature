// src/managers/book.manager.ts

// ? interfaces
import { TId } from '@interfaces';
// ? models
import { Book } from '@models';

export class BookManager {
	private books: Book[] = [];

	createBook(id: TId, text: string, authorId: TId): Book {
		const book = new Book(id, text, authorId);
		this.books.push(book);
		return book;
	}

	getBookById(id: TId): Book | undefined {
		return this.books.find(book => book.id === id);
	}

	getAllBooks(): Book[] {
		return this.books;
	}
}
