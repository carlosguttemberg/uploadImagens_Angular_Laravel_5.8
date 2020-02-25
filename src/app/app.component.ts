import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postImagens';

  private posts: Post[] = [
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
    new Post("Carlos", "Meu Post", "Sub Teste", "teste@teste.com", "teste"),
  ];
}
