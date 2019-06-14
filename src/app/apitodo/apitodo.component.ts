import {Component, OnInit} from '@angular/core';
import {ApitodoService} from './apitodo.service';
import {TodoType} from "../todo/todo.component";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-apitodo',
    templateUrl: './apitodo.component.html',
    styleUrls: ['./apitodo.component.css']
})
export class ApitodoComponent implements OnInit {

    todos: Array<ApiTodoType> = [];
    errorMsg: String;
    enableCheckMsg: String;
    isErrorMessageClosed: boolean;

    constructor(private apiTodoService: ApitodoService, private spinner: NgxSpinnerService) {
        this.todos = [];
        this.errorMsg = '';
        this.isErrorMessageClosed = false;
        this.enableCheckMsg = '';
    }

    ngOnInit() {
        this.spinner.show();
        this.getTodos();
    }

    public getTodos() {
        this.spinner.show();
        this.apiTodoService.getTodos().subscribe((data) => {
            this.todos = data.todos;
        });
        this.spinner.hide();
    }

    addTodo(value) {
        let body = {
            "title": value.title,
            "completed": false,
            "username": " Suvathi",
            "createDate": Date.now()
        }

        this.apiTodoService.addTodo(body).subscribe(
            data => {
                this.getTodos();
            },
            err => {

            }
        )

    }

    updateTodoApi(id, value, v, completed) {
        let body = {
            "completed": completed,
            "_id": id,
            "__v": v,
            "title": value,
            "username": "Suvathi",
            "modifiedAt": Date.now(),
            createdAt: Date.now(),
        }
        this.apiTodoService.updateTodo(body).subscribe(
            data => {
                this.getTodos();
            },
            err => {

            }
        )
    }

    addTodoItemApi(data) {
        if (data.length > 0) {
            let addedData = new ApiTodoType(data, (this.todos.length + 1), false, false);
            this.todos.push(addedData);

            this.addTodo(addedData);

            this.errorMsg = '';
            this.enableCheckMsg = '';
        } else {
            this.errorMsg = "Make sure todo is not empty";
            this.isErrorMessageClosed = true;
        }
    }

    enableEditApi(data) {
        data.isEdit = true;
        this.enableCheckMsg = '';
    }

    removeMessage(todo, i) {
        this.apiTodoService.deleteTodo(todo._id).subscribe(data => {
            if (data.success) {
                this.getTodos();
            }
        })
    }


}

export class ApiTodoType {
    id: number;
    isEdit: boolean;
    isChecked: boolean;
    title: string;

    constructor(title, id, isEdit, isChecked) {
        this.title = title;
        this.id = id;
        this.isEdit = isEdit;
        this.isChecked = isChecked;
    }
}
