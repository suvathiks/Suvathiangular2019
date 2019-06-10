import { Component, OnInit } from '@angular/core';

export interface TodoType {
  id: number;
  name: string;
  status: string;
  isEdit: boolean;
  isChecked: boolean;
  isdisabled: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  task: string;
  txtValue:string = null;
  message : string;
  todos: Array<TodoType> = [];


  constructor() {
    this.todos = [];
  }

  ngOnInit() {
  }

  taskComplete(id: number,i: number,status: string ,e)
  {
    if(status =="InComplete" && e.target.checked){
      this.todos[i].isdisabled = true;
      this.todos[i].isChecked = false;
      this.todos[i].status = "Completed";
    }
  }

  enableTodoitem(id: number,i: number,status: string )
  {

    //  if(status =="InComplete" && isChecked.target.checked){
    this.todos.forEach((item, index) => {
      if(item.id === id)
        this.todos[index].isEdit = true;
      else
        this.todos[index].isEdit = false;
    });
    //   }

  }
  updateTodoItem(name: string,i: number,status: string){
    this.todos[i].name = name;
    //this.todos[i].isChecked = false;
    this.todos[i].isEdit = false;
  }
  removeTodoItem = (todo: TodoType): void => {
    console.log('hiii');
    this.todos = this.todos.filter(todos => todos.id !== todo.id);
  }

  addTodoItem(data) {
    this.message="";
    this.task="";
    this.txtValue = data;

    if(this.txtValue != '')
    {
      this.todos.push({
        id: this.todos.length+1,
        name: data,
        status: "InComplete",
        isdisabled: false,
        isChecked: false,
        isEdit: false
      });

    }
    else
      this.message = "Please add the todo first and try add";
  }

}
