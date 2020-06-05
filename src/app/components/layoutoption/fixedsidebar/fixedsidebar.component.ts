
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixedsidebar',
  templateUrl: './fixedsidebar.component.html',
  styleUrls: ['./fixedsidebar.component.css']
})
export class FixedsidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
    document.body.classList.add('layout-fixed')


  }

}
