import type { List as PersistentList } from "@prisma/client";
import { List } from "@domain/core/list.entity";

export class ListMapper {
    constructor() {}

    static toPersistence(list: List) {
        return {
            id: list.id,
            title: list.title,
            position: list.position,
        };
    }

    static toDomain(persistentList: PersistentList): List {
        return List.restore({
            id: persistentList.id,
            title: persistentList.title,
            position: persistentList.position,
        });
    }
}
