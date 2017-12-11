import { BaseEntity } from './../../shared';

export class Post implements BaseEntity {
    constructor(
        public id?: number,
        public comment?: any,
        public date?: any,
        public tags?: BaseEntity[],
    ) {
    }
}
