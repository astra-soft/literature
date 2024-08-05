// src/interface/book.interface.ts

// ? interfaces
import { TId, IBaseEntity } from '@interfaces';

export interface IBook extends IBaseEntity {
	text: string;
	creationDate: Date;
	authorId: TId;
}
