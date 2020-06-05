import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ribbons',
  templateUrl: './ribbons.component.html',
  styleUrls: ['./ribbons.component.css']
})
export class RibbonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')

  }

}
