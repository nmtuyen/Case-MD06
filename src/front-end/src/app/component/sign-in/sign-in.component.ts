import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JwtResponse} from '../../models/in-out/jwt-response';
import {AuthService} from '../../service/in-out/auth.service';
import {TokenService} from '../../service/in-out/token.service';
import {Router} from '@angular/router';

import {SignInForm} from "../../models/in-out/sign-in-form";

import {User} from '../../models/user/user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  check: boolean = false;
   // @ts-ignore
  user: User = {};
  signInForm: SignInForm = {};
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  isPassword = 'password';
  isLogin = false;
  status = 'Nhập thông tin để sử dụng dịch vụ';
  jwtResponse: JwtResponse = {};

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) {
  }

  ngOnInit(): void {
  }

  get username(): any {
    return this.loginForm.get('userName');
  }

  get password(): any {
    return this.loginForm.get('password');
  }
  showPass(): void {
    this.isPassword = (this.isPassword === 'password') ? 'text' : 'password';
  }
  login(): void {
    this.signInForm = new SignInForm(this.username.value, this.password.value);
    console.log(this.signInForm);
    this.authService.login(this.signInForm).subscribe(data => {
      if (data.token !== undefined) {
        localStorage.setItem('userName', this.username.value)
        localStorage.setItem('pw', this.password.value)
        this.isLogin = true;
        this.status = 'Login successfully';
        this.jwtResponse = {

          id: data.id,

          token: data.token,
          name: data.name,
          userName : data.userName,
          roles: data.roles,
        }
        ;
        console.log(this.jwtResponse.id);
        this.tokenService.setJwt(this.jwtResponse);
        // @ts-ignore
        for (let i = 0; i < data.roles?.length; i++) {
          // @ts-ignore
          if (data.roles[i].authority === 'ROLE_ADMIN') {
            console.log('a');
            this.check = true;
            this.router.navigate(['admin']).then(() => {
              window.location.reload();

            });
          }
        }
        if (this.check === false) {
          this.router.navigate(['']).then(() => {
            window.location.reload();
          });
        }
      } else {
        this.status = 'Login failed! Please try again!';
      }
    }
    ), this.status = 'Sai tài khoản hoặc mật khẩu';
  }

}
