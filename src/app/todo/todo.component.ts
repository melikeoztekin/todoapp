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

  displayAll : boolean = false;

  getItems(){
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter(item => item.action== false);
  }

  addItem(value:string){
    if(value != ""){
      this.model.items.push({ description: value, action: false });
    }
    else{
      alert("Fields cannot be left blank.");
    }
  }

  //tamamlanmış elemanların sayısını göstermek için
  displayCount(){
    return this.model.items.filter(i=>i.action).length;
  }
}
