import {Component, Input, OnInit} from '@angular/core';
import {CategoryServiceService} from '../../../service/service/category-service.service';
import {categoryService} from '../../../models/categoryService/categoryService';
import {FormControl, FormGroup} from '@angular/forms';
import {UserServiceService} from '../../../service/user-service/user-service.service';

@Component({
  selector: 'app-list-service-register',
  templateUrl: './list-service-register.component.html',
  styleUrls: ['./list-service-register.component.css']
})
export class ListServiceRegisterComponent implements OnInit {
  @Input() listService: categoryService[] = [];
  iuserService : FormGroup = new FormGroup({
    price : new FormControl()
  })

  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {

  }
getUserEditPrice(id : number){
    this.userService.getUserEditPrice(id).subscribe(data =>{
      console.log(data.price)
      this.iuserService  = new FormGroup({
        price : new FormControl(data.price)
      })
    })

}

}
