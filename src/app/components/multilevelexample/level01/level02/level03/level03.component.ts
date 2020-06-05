import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level03',
  templateUrl: './level03.component.html',
  styleUrls: ['./level03.component.css']
})
export class Level03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
  }

}
