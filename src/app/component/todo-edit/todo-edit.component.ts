import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/todo.model';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../service/todo.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  public todoForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
  });
  constructor(
    private todoService: TodoService,
    private  router: Router,
    private  route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      console.log(params);
      if(params['id']){
        this.todoService.getTodo(params['id']).subscribe((todo) => {
          this.updateTodo(todo);
        });
      }
    });
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    const todo: Todo = this.todoForm.value;
    this.todoService.updateTodo(todo).subscribe(() => {
      this.router.navigate(['/', 'todos']);
    });
  }

  updateTodo(todo: Todo): void {
    this.todoForm.patchValue(
      todo
    );
  }

}
