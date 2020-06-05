import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalsandalerts',
  templateUrl: './modalsandalerts.component.html',
  styleUrls: ['./modalsandalerts.component.css']
})
export class ModalsandalertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('sidebar-mini')

  }

}
