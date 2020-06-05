import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private nav: Router
  ) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem('auth');
    this.nav.navigate(['/login'])
  }
  home(){
    this.nav.navigate(['/dashboard'])
  }
  contact(){
    this.nav.navigate(['/contacts'])
  }
}
