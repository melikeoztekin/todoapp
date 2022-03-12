import { TodoItem } from "./todoItem";

export class Model{
    name:string;
    items:TodoItem[];

    constructor(){
        this.name="Melike";
        this.items=[
            { description: "breakfast", action:"yes" },
            { description: "sport", action:"yes" },
            { description: "shop", action:"no" },
            { description: "reading", action:"no" }
        ];
    }
}