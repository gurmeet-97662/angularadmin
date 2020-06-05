import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  errors: any = {};
  constructor(
    private router: Router
  ) { }  
  login(){
    if(this.validate()){
      localStorage.setItem('auth', JSON.stringify(this.user))
      this.router.navigate(['/dashboard']);
    }
  }
  validate(){
    let err = false;
    this.errors = {};
    if(!this.user.email){
      err = true;
      this.errors.email = 'Please enter email address.'
    }else if(!new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$').test(this.user.email)){
      err = true;
      this.errors.email = 'Please enter valid email address.'
    }
    if(!this.user.password){
      err = true;
      this.errors.password = 'Please enter password.'
    }
    return !err;
  }
  ngOnInit(): void {
    document.body.classList.add('hold-transition')
    document.body.classList.add('login-page')
  }

}
