import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxed',
  templateUrl: './boxed.component.html',
  styleUrls: ['./boxed.component.css']
})
export class BoxedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
    document.body.classList.add('layout-fixed')


  }

}
