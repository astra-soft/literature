// src/models/tom.ts

// ? interfaces
import { ITom, TId } from '@interfaces';

export class Tom implements ITom {
	id: TId;
	booksId: TId[];
	authorId: TId;
	creationDate: Date;

	constructor(id: TId, booksId: TId[], authorId: TId) {
		this.id = id;
		this.booksId = booksId;
		this.authorId = authorId;
		this.creationDate = new Date(); // The date of creation set automatically
	}
}
