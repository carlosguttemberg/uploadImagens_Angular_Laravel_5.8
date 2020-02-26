import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  public posts: Post[] = [
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
  ];
  
  constructor(private http: HttpClient) { }
}
