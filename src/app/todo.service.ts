import { Init } from './init-todos';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService extends Init {
  
  constructor() {
    super();
    console.log('todo service initialized')
    this.load()
   }

   getTodos(){
     var todos = JSON.parse(localStorage.getItem('todos'))
     return todos
   }
   addTodo(newTodo){
    var todos = JSON.parse(localStorage.getItem('todos'))
    //Add new todos
    todos.push(newTodo)
    //setNew Todos
    localStorage.setItem('todos',JSON.stringify(todos))
   }
   deleteTodo(todoText){
    var todos = JSON.parse(localStorage.getItem('todos'))
    for(let i=0; i<todos.length; i++){
      if(todos[i].text==todoText){
        todos.splice(i,1)

      }
      localStorage.setItem('todos',JSON.stringify(todos))
    }
   }

   updateTodo(oldText,newText){
    var todos = JSON.parse(localStorage.getItem('todos'))
    for(let i=0; i<todos.length; i++){
      if(todos[i].text==oldText){
        todos[i].text = newText

      }
    }
      localStorage.setItem('todos',JSON.stringify(todos))
    
   }

}
