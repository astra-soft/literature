// src/models/author.ts

// ? interfaces
import { IAuthor, IAuthorMeta, TId } from '@interfaces';

export class Author implements IAuthor {
	id: TId;
	profile: { firstName: string; lastName: string };
	booksId: TId[] = [];
	tomsId: TId[] = [];
	meta: IAuthorMeta;

	constructor(id: TId, firstName: string, lastName: string) {
		this.id = id;
		this.profile = { firstName, lastName };
		this.meta = { countOfBooks: 0, countOfToms: 0 };
	}

	addBook(bookId: TId): void {
		this.booksId.push(bookId);
		this.meta.countOfBooks++;
	}

	addTom(tomId: TId): void {
		this.tomsId.push(tomId);
		this.meta.countOfToms++;
	}
}
