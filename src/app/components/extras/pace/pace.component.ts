import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pace',
  templateUrl: './pace.component.html',
  styleUrls: ['./pace.component.css']
})
export class PaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
  }

}
