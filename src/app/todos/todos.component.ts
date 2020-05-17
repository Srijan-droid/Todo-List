import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos;
text;
oldText;
appState = 'default'
  constructor(private _todoService : TodoService) { }

  ngOnInit(): void {
    this.todos = this._todoService.getTodos()
  }

   
  addTodo(){
      var newTodo={
        text:this.text
      }
    this.todos.push(newTodo)
    this._todoService.addTodo(newTodo)}


  deleteTodo(todoText){
    for(let i=0; i<this.todos.length; i++){
      if(this.todos[i].text==todoText){
        this.todos.splice(i,1)
      }
    }

    this._todoService.deleteTodo(todoText)
  }
  editTodo(todo){
    this.appState = 'edit'
    this.text = todo.text
    this.oldText = todo.text
  }
  updateTodo(){
    console.log(this.text)
    for(let i=0; i<this.todos.length; i++){
      if(this.todos[i].text==this.oldText){
        this.todos[i].text = this.text
      }
  }
  

  
  this._todoService.updateTodo(this.oldText,this.text)
}
}



