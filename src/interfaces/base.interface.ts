// src/interface/base.interface.ts

// T (type) + Id = TId
export type TId = number;

export interface IBaseEntity {
	id: TId; // unique identification
}
