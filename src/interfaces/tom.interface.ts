// src/interface/tom.interface.ts

// ? interfaces
import { TId, IBaseEntity, IBaseManager } from '@interfaces';

export interface ITom extends IBaseEntity {
	booksId: TId[];
	authorId: TId;
	creationDate: Date;
}

export interface ITomManager extends IBaseManager {
	createOneTom(booksId: TId[], authorId: TId): ITom;
	getTomById(id: TId): ITom | undefined;
	getAllToms(): ITom[];
}
