// src/managers/base.manager.ts

// ? interface
import { IBaseEntity, IBaseManager, TId } from '@interfaces';

export class BaseManager<T extends IBaseEntity> implements IBaseManager<T> {
	readonly entities: T[] = [];

	/**
	 *
	 * @returns next id for entity
	 */
	_generateId(): TId {
		return this.entities.length > 0
			? // take the last tom and increment his id by one
			  this.entities[this.entities.length - 1].id + 1
			: 1;
	}

	/**
	 * try to find entity by id
	 * @param id - id of entity
	 * @returns entity - or undefined
	 */
	getOneById(id: TId): T | undefined {
		return this.entities.find(entity => entity.id === id);
	}

	/**
	 *
	 * @returns array of entities
	 */
	getAll(): T[] {
		return this.entities;
	}
}
