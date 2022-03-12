import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { }
  /* model classı içinden TodoItem interfaceindeki tanımlamalara göre nesne ataması yapıldığı için ve name ataması da orada gerçekleştiği için component içinden tanıma ihtiyaç duyulmaz.
  bunlar yerine bir model tanımlaması yapılmalıdır
  //private bir öğe oluşturduk onun için method getName() methodunu kullanarak çağırma işlemi yaptık
  private name: string ="Melike";
  getName(){
    return this.name;
  }
 
    // items=[
    //   "Item 1", "Item 2", "Item 3","Item 4"
    // ];
    
    items: TodoItem[]=[
      //  interface kullanımında nesneyi tanımlama yaptığımız şekle göre eklemeliyiz yeni bir özellik için interfacede yani bir nesne tanımı yapılmalı
      { description: "breakfast", action:"yes" },
      { description: "sport", action:"yes" },
      { description: "shop", action:"no" },
      { description: "reading", action:"no" }

      // class ile constructor kullanırken nesneler bu şekilde oluşturulur 
      // interface kullanımında bu şekilde tanıma izin vermez.
      // new TodoItem("breakfast","yes"),
      // new TodoItem("sport","yes"),
      // new TodoItem("shop","no"),
      // new TodoItem("reading","no")
    ];*/
  
    model =new Model();
    getName(){
    return this.model.name;
  }

  getItems(){
    return this.model.items;
  }
}
