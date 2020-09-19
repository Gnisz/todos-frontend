import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../service/todo.service';
import {Route, Router} from '@angular/router';
import {Todo} from '../../model/todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  public todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
  });
  constructor(
    private todoService: TodoService,
    private  router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    const todo: Todo = this.todoForm.value;
    this.todoService.addTodo(todo).subscribe(() => {
      this.router.navigate(['/', 'todos']);
    });
  }

}
