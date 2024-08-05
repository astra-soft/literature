// src/models/book.ts

// ? interfaces
import { IBook, TId } from '@interfaces';

export class Book implements IBook {
	id: TId;
	text: string;
	creationDate: Date;
	authorId: TId;

	constructor(id: TId, text: string, authorId: TId) {
		this.id = id;
		this.text = text;
		this.creationDate = new Date(); // The date of creation set automatically
		this.authorId = authorId;
	}
}
