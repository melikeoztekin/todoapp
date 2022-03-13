import { TodoItem } from "./todoItem";

export class Model{
    name:string;
    items:TodoItem[];

    constructor(){
        this.name="Melike";
        this.items=[
            { description: "breakfast", action: true },
            { description: "sport", action: false },
            { description: "shop", action: true },
            { description: "reading", action: false }
        ];
    }
}