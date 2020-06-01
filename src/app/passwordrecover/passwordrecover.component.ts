import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passwordrecover',
  templateUrl: './passwordrecover.component.html',
  styleUrls: ['./passwordrecover.component.css']
})
export class PasswordRecoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('hold transition')
    document.body.classList.add('login page')


  }

}
