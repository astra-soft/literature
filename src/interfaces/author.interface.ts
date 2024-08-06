// src/interface/author.interface.ts

// ? interfaces
import { TId, IBaseEntity, IBaseManager } from '@interfaces';

// I (interface) + Author = IAuthor
export interface IAuthor extends IBaseEntity {
	profile: {
		firstName: string;
		lastName: string;
	};
	booksId: TId[]; // can write array like this
	tomsId: Array<TId>; // or like this, u also can write Array<TId | SomethingOther>
	meta: IAuthorMeta;

	addBook: (tomId: TId) => void;
	addTom: (tomId: TId) => void;
}

// I (interface) + Author.Meta = IAuthorMeta
export interface IAuthorMeta {
	countOfBooks: number;
	countOfToms: number;
}

export interface IAuthorManager extends IBaseManager {
	createOneAuthor(firstName: string, lastName: string): IAuthor;
	getAuthorById(id: TId): IAuthor | undefined;
	getAllAuthors(): IAuthor[];
	addBookToAuthorById(authorId: TId, bookId: TId): void;
	addTomToAuthorById(authorId: TId, tomId: TId): void;
}
