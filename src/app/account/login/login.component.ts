import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public data:any;
  constructor(private authSerice : AuthService,private router: Router) { }

  ngOnInit(): void {
    this.data="test";
    var utype=localStorage.getItem("usertype");
    if(utype=="Admin")
    {
      this.router.navigate( ['/Admin']);
    }
  }

  submitted=false;
  formModel: FormModel= new FormModel();

  saveNameForm(formModel:any){
    this.submitted = true;
    console.log(formModel);
    this.authSerice.UserLogin(formModel).subscribe((result: any) => {          
      console.log(result.data);
     debugger;
      if(result.statusCode==200)
      {
         debugger;
          if(result.data.usertype=="Admin")
          {
            debugger;
            localStorage.setItem("usertype", "Admin");
            this.router.navigate( ['/Admin']);
          }
          else
          {
            if(result.data.usertype=="Client")
            {
              this.router.navigate( ['/POSDashboard']);
            }
            else
            {
                 
            }
          }    
      }
      else{

      }

  });
  }

 

}


export class FormModel {
  userName!: string;
  password:string | undefined;
 }