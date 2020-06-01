import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')

  }

}
