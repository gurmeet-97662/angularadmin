import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level0001',
  templateUrl: './level0001.component.html',
  styleUrls: ['./level0001.component.css']
})
export class Level0001Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
  }

}
