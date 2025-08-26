import Tag from "../entities/tag.entity";

export default interface TagRepository {
  create(tag: Tag): Promise<Tag>;
  findById(id: number): Promise<Tag | null>;
  update(tag: Tag): Promise<Tag>;
  delete(id: number): Promise<boolean>;
}
