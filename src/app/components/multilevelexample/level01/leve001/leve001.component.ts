import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leve001',
  templateUrl: './leve001.component.html',
  styleUrls: ['./leve001.component.css']
})
export class Leve001Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
  }

}
