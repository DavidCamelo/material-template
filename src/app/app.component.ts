import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  routes;

  constructor() {
    this.routes = [
      { path: 'home', show: true, nombre: 'Home'},
      { path: 'citas', show: true, nombre: 'Mis citas'}
    ];
  }

 }
