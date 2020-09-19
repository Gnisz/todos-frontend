import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Todo} from '../../model/todo.model';

const TODO_ENDPOINT = '/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  public getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(`${environment.API_BASE}${TODO_ENDPOINT}`);
  }

  public addTodo(todo: Todo): Observable<Todo> {
    return  this.http.post<Todo>(`${environment.API_BASE}${TODO_ENDPOINT}`, todo);
  }

  public getTodo(id: string): Observable<Todo>{
    return this.http.get<Todo>(`${environment.API_BASE}${TODO_ENDPOINT}/${id}`);
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return  this.http.put<Todo>(`${environment.API_BASE}${TODO_ENDPOINT}`, todo);
  }
}
