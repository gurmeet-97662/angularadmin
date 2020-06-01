import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixedfooter',
  templateUrl: './fixedfooter.component.html',
  styleUrls: ['./fixedfooter.component.css']
})
export class FixedfooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
    document.body.classList.add('layout-footer-fixed')

  }

}
