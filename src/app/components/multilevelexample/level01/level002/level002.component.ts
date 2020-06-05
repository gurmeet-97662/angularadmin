import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level002',
  templateUrl: './level002.component.html',
  styleUrls: ['./level002.component.css']
})
export class Level002Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
  }

}
