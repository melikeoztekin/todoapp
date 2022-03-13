import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { }
  
  model =new Model();
  getName(){
    return this.model.name;
  }
  
  getItems(){
    return this.model.items;
  }

  addItem(value:string){
    if(value != ""){
      this.model.items.push({ description: value, action:"no" });
    }
    else{
      alert("Fields cannot be left blank.");
    }
  }
  
}
