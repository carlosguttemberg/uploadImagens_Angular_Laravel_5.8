import { Component } from '@angular/core';
import { Post } from './post';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postImagens';

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

  constructor(public dialog: MatDialog){}

  openDialog(){
    const dialogRef = this.dialog.open(PostDialogComponent, {width: '600px'});
  }
}
