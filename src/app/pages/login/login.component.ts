import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: LoginService) { }

  ngOnInit(): void {
    this.auth.authChange.subscribe(user => {

    })
  }

  async login() {
    await this.auth.login();
  }

}
