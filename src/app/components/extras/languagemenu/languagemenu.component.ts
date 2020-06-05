import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languagemenu',
  templateUrl: './languagemenu.component.html',
  styleUrls: ['./languagemenu.component.css']
})
export class LanguagemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')
  }

}
