import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {CategoryService} from '../category.service'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  categorydata:any;
  productdata:any;
  constructor(private category:CategoryService ){}
  getCategory()
  {
    this.category.getCategory().subscribe(responce=>{this.categorydata=responce.data});
  }
  
  ngOnInit(): void {
    debugger;
    
   this.getCategory();
  }
  submitted=false;
  formModel: FormModel= new FormModel();
  saveNameForm(formModel:any){
    this.submitted = true;
    console.log(formModel);
    this.category.addEditCategory(formModel).subscribe((result: any) => {          
      console.log(result.data);
     debugger;
      if(result.statusCode==200)
      {
         debugger;
         alert(result.message);  
         this.getCategory(); 
      }
      else{
         alert(result.message);
      }

  });
  }

}
export class FormModel {
  name!: string;
  parentId!:0
 
 }
