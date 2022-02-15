import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 formGroup!: FormGroup;
  constructor( private authService : AuthServiceService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup=new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  loginProcess(){
    this.authService.login(this.formGroup.value).subscribe(
      (res:any)=>{
        sessionStorage.setItem('token',res.token);
        sessionStorage.setItem('user_id',res.user_id);
        sessionStorage.setItem('user_name',res.userName);
        this.router.navigateByUrl('products');
      }, 
      err=>{
        this.router.navigateByUrl('InvalidCredentials');
        
      }
    );
  }

}
