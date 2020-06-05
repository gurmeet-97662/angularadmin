import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level003',
  templateUrl: './level003.component.html',
  styleUrls: ['./level003.component.css']
})
export class Level003Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
  }

}
