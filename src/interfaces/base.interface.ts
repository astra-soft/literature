// src/interface/base.interface.ts

// T (type) + Id = TId
export type TId = number;

export interface IBaseEntity {
	id: TId; // unique identification
}

export interface IBaseManager {
	_generateId: () => TId; // all managers need to have method to generate id
}
