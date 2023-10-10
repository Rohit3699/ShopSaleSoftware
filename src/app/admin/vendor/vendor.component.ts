import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service'
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  vendorData:any;
  constructor(private category:CategoryService ){}
  getVendor(Usertype:string)
  {
    debugger
     this.category.getUser("Vendor").subscribe((Response)=>{this.vendorData=Response.data})
  }
  ngOnInit(): void {
    debugger;
    this.getVendor("Vendor")
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
        // this.getCategory(); 
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
  CheckBox!:boolean
 }

