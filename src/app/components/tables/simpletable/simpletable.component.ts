import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpletable',
  templateUrl: './simpletable.component.html',
  styleUrls: ['./simpletable.component.css']
})
export class SimpletableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   document.body.classList.add('hold-transition')
   document.body.classList.add('sidebar-mini')


  }

}
