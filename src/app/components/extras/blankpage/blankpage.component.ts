import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blankpage',
  templateUrl: './blankpage.component.html',
  styleUrls: ['./blankpage.component.css']
})
export class BlankpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
  }

}
