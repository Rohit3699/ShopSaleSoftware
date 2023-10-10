
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,  ReplaySubject, Subscriber } from 'rxjs';
import{CategoryService} from '../category.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productdata:any;
  categorydata:any;

  constructor(private category:CategoryService,private router:Router ){}

  DeleteProduct(ProductId:string){
    debugger;
    if(confirm("Are you sure to delete ")){
    this.category.ProductDelete(ProductId)
    .subscribe((response:any)=>{
      if(response.statusCode==200)
      debugger;
      {
        alert(response.message); 
      }
      this.getProduct();
    })
  }
  }
  getProduct()
  {
    this.category.getProduct().subscribe(Response=>{this.productdata=Response.data});
  }
  getcategory()
  {
    this.category.getCategory().subscribe(Response=>{this.categorydata=Response.data
    console.log(this.categorydata);
    })
  }
 
  onChange =  ($event: Event)=> {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    this.convertTobase64(file); 
   
  }
  convertTobase64(file:File)
  {
    const observable=new Observable((subscriber:Subscriber<any>)=>{
       this.readFile(file,subscriber)
    });
     observable.subscribe((d)=>{
      console.log(d)
      this.formModel.productImage=d 
     })
  }
  readFile(file:File,subscribe:Subscriber<any>)
  {
     const filereader=new FileReader()
     filereader.readAsDataURL(file)
     filereader.onload=()=>
     {
      subscribe.next(filereader.result);
      subscribe.complete();
     }
     filereader.onerror=()=>
     {
      subscribe.error();
      subscribe.complete();
     }
    
  }
  ngOnInit(): void {
    debugger;
    this.getcategory();
    this.getProduct();
  }
  submitted=false;
  formModel: FormModel= new FormModel();
 
  saveNameForm(formModel:any){
    this.submitted = true;
    console.log("productdata",formModel);
    debugger;
    this.category.addEditProduct(formModel).subscribe((result: any) => {          
      console.log(result.data);
     debugger;
      if(result.statusCode==200)
      {
         debugger;
         alert(result.message); 
         this.getProduct(); 
      }
      else{
         alert(result.message);
      }
  });
  }
  editClick(index: number) {
    debugger;
    console. log(this.productdata.length)
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
    if (index >= 0 && index < this.productdata.length) {
        const selectedItem = this.productdata[index];
        this.formModel.productId = selectedItem.productId;
        this.formModel.name = selectedItem.name;
        this.formModel.parentId = selectedItem.parentId;
        this.formModel.price = selectedItem.price;
        this.formModel.isReturnable = selectedItem.isReturnable;
        this.formModel.productImage = selectedItem.productImage;
        this.formModel.brand = selectedItem.brand;

       
}
}
}
export class FormModel {
  productId!:number
  parentId!:number
  name!: string;
  price!:number;
  brand!:string;
  isReturnable!:boolean;
  productImage!:string;
 }
