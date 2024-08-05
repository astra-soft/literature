// src/interface/author.interface.ts

// ? interfaces
import { TId, IBaseEntity } from '@interfaces';

// I (interface) + Author = IAuthor
export interface IAuthor extends IBaseEntity {
	profile: {
		firstName: string;
		lastName: string;
	};
	booksId: TId[]; // can write array like this
	tomsId: Array<TId>; // or like this, u also can write Array<TId | SomethingOther>
	meta: IAuthorMeta;
}

// I (interface) + Author.Meta = IAuthorMeta
export interface IAuthorMeta {
	countOfBooks: number;
	countOfToms: number;
}
