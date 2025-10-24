import { Tag } from '@domain/core/tag.entity';

export interface ITagRepository {
    create(tag: Tag): Promise<Tag>;
    findById(id: number): Promise<Tag | null>;
    update(tag: Tag): Promise<Tag>;
    delete(id: number): Promise<boolean>;
}
