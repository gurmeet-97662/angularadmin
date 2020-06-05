import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarandtabs',
  templateUrl: './navbarandtabs.component.html',
  styleUrls: ['./navbarandtabs.component.css']
})
export class NavbarandtabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')

  }

}
