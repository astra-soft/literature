// src/managers/author.manager.ts

// ? interfaces
import { IAuthor, TId, IAuthorManager } from '@interfaces';
// ? models
import { Author } from '@models';
// ? managers
import { BaseManager, BookManager, TomManager } from '@managers';

export class AuthorManager
	extends BaseManager<IAuthor>
	implements IAuthorManager
{
	private bookManager: BookManager;
	private tomManager: TomManager;

	constructor(bookManager: BookManager, tomManager: TomManager) {
		super();
		this.bookManager = bookManager;
		this.tomManager = tomManager;
	}

	/**
	 * create a new one author
	 * @param firstName - string, could be empty
	 * @param lastName - string, could be empty
	 * @returns author
	 */
	createOne(firstName: string, lastName: string): IAuthor {
		const author = new Author(this._generateId(), firstName, lastName);
		this.entities.push(author);
		return author;
	}

	/**
	 * add book to author
	 * @param authorId - id of author
	 * @param bookId - id of book
	 */
	addBookToAuthorById(authorId: TId, bookId: TId): void {
		const author = this.getOneById(authorId);
		const book = this.bookManager.getOneById(bookId);

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
		const author = this.getOneById(authorId);
		const tom = this.tomManager.getOneById(tomId);

		if (author && tom) {
			author.addTom(tomId);
		} else {
			throw new Error(
				`Author or Tom not found (Author ID: ${authorId}, Tom ID: ${tomId})`
			);
		}
	}
}
