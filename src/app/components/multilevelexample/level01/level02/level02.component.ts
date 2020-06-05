import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level02',
  templateUrl: './level02.component.html',
  styleUrls: ['./level02.component.css']
})
export class Level02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
  }

}
