import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  public tarefa = "";
  public items = ['item 1', 'item 2', 'item 3'];
  
  addTarefa(){
    this.items.push(this.tarefa);
  }
  remover(){
    
  }
}

