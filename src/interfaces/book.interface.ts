// src/interface/book.interface.ts

// ? interfaces
import { TId, IBaseEntity, IBaseManager } from '@interfaces';

export interface IBook extends IBaseEntity {
	text: string;
	creationDate: Date;
	authorId: TId;
}

export interface IBookManager extends IBaseManager<IBook> {
	createOneBook(text: string, authorId: TId): IBook;
}
