// src/interface/tom.interface.ts

// ? interfaces
import { TId, IBaseEntity } from '@interfaces';

export interface ITom extends IBaseEntity {
	booksId: TId[];
	authorId: TId;
	creationDate: Date;
}
