import Task from "./task.entity";

export default class List {
    private id!: number;
    private title!: string;
    private tasks!: Array<Task>;
}