import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixednavbar',
  templateUrl: './fixednavbar.component.html',
  styleUrls: ['./fixednavbar.component.css']
})
export class FixednavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
    document.body.classList.add('layout-navbar-fixed')

  }

}
