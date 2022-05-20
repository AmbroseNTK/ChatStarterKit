import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, User, authState } from '@angular/fire/auth';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: Auth) {
    authState(this.auth).subscribe(user => {
      this.authChange.next(user);
    });
  }

  authChange: BehaviorSubject<any> = new BehaviorSubject(null);

  async login() {
    let provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider);
  }

  async logout() {
    await this.auth.signOut();
  }
}
