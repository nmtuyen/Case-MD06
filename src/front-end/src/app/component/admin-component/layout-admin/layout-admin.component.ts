import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {JwtResponse} from "../../../models/in-out/jwt-response";

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {


  constructor(private router: Router) {
    this.checkTonken();
  }

  ngOnInit(): void {
  }
  roles = [];
  // @ts-ignore
  jwt: JwtResponse = JSON.parse(localStorage.getItem('jwtResponse'));
  checkTonken() {
    console.log(this.jwt.roles)
      if (!this.jwt){
        this.router.navigate([''])
      }else {
        // @ts-ignore
        for (let i = 0; i < this.jwt.roles?.length; i++) {
          // @ts-ignore
          if (this.jwt.roles[i].authority === 'ROLE_ADMIN'){
            // @ts-ignore
            this.roles.push(this.jwt.roles[i])
          }
        }
       if (this.roles.length != 0){}
       else {
         this.router.navigate([''])
       }

      }
    }
  }

