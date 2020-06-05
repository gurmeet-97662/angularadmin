import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsedsidebar',
  templateUrl: './collapsedsidebar.component.html',
  styleUrls: ['./collapsedsidebar.component.css']
})
export class CollapsedsidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
    document.body.classList.add('sidebar-collapse')

  }

}
