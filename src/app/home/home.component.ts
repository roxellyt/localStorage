import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.tarefa = localStorage.getItem('item');
  }
  public tarefa = '';
  public items = [];

  addTarefa() {
    this.items.push(this.tarefa);
    localStorage.setItem('item', this.tarefa);
  }
  remover(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
