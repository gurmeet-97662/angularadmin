import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informational',
  templateUrl: './informational.component.html',
  styleUrls: ['./informational.component.css']
})
export class InformationalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')


  }

}
