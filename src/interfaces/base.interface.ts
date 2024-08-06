// src/interface/base.interface.ts

// T (type) + Id = TId
export type TId = number;

export interface IBaseEntity {
	id: TId; // unique identification
}

export interface IBaseManager<T> {
	readonly entities: Array<T>;
	/**
	 * all managers need to have method to generate id
	 * @returns id - next id for entity
	 */
	_generateId: () => TId;

	getOneById(id: TId): T | undefined;

	getAll(): T[];
}
