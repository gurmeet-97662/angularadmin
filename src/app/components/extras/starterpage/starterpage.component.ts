import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starterpage',
  templateUrl: './starterpage.component.html',
  styleUrls: ['./starterpage.component.css']
})
export class StarterpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
  }

}
