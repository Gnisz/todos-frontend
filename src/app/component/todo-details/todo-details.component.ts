import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodoService} from '../service/todo.service';
import {Todo} from '../../model/todo.model';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  public todo: Todo = null;

  constructor(
    private  route: ActivatedRoute,
    private  todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      console.log(params);
      if(params['id']){
        this.todoService.getTodo(params['id']).subscribe((todo) => {
          this.todo = todo;
        });
      }
    });
  }

}
