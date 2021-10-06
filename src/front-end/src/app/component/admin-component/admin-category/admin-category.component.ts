import { Component, OnInit } from '@angular/core';
import {CategoryServiceService} from '../../../service/service/category-service.service';
import {categoryService} from '../../../models/categoryService/categoryService';
import {FormControl, FormGroup} from '@angular/forms';
import {data} from 'jquery';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  constructor(private categoryService : CategoryServiceService) { }
category : categoryService[]  = [];
  ngOnInit(): void {
    this.getAllCategory()
  }
getAllCategory(){
    this.categoryService.getAll().subscribe(data=>{
      this.category = data;
    })
}
categoryById : categoryService = {}
getCategoryById(id : any){
    this.categoryService.getById(id).subscribe(data =>{
      this.categoryById = data;
      this.categoryForm.patchValue(data)
    })
}
categoryForm : FormGroup = new FormGroup({
  typeService : new FormControl(),
  name : new FormControl()
})
 getCategorybyIdForm(id : any){
    this.categoryService.getById(id).subscribe(data=>{
      this.categoryForm = new FormGroup({
        typeService : new FormControl(data.typeService),
        name : new FormControl(data.name)
      })
    })
 }
 saveCategory(id : any){
    let category = this.categoryForm.value;
    console.log(category)
    this.categoryService.saveCategory(id,category).subscribe(data =>{
      console.log(data)
      console.log('Ok')
      window.location.reload()
    })
 }
 deleteCategory(id : any){
    this.categoryService.deleteById(id).subscribe(data =>{
      console.log('ok')
      window.location.reload()
    })
 }
 createCategory(){
    this.categoryService.createCategory(this.categoryForm.value).subscribe(data=>{
      console.log('ok'
      )
      window.location.reload()
    })

 }
}
