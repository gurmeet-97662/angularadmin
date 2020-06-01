import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnavigationsidebar',
  templateUrl: './topnavigationsidebar.component.html',
  styleUrls: ['./topnavigationsidebar.component.css']
})
export class TopnavigationsidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-collapse')
    document.body.classList.add('layout-top-nav')

  }

}
