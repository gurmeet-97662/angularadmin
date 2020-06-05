import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generalelements',
  templateUrl: './generalelements.component.html',
  styleUrls: ['./generalelements.component.css']
})
export class GeneralelementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
  }

}
