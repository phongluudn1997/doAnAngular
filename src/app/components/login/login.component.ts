import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { Message } from 'src/app/models/message';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loginUserData = {};
  message: Message = {'content': '', 'type': ''};
  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private messagesService: MessagesService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit1() {
    
    // this.message['content']="Login Successfull";
    // this.message['type']="success";
    // this.messagesService.add(this.message);
    
    console.log(this.messagesService.messages)
    this.submitted = true;
    console.log(this.submitted)
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService.loginTest({ username: this.loginForm.controls.username.value, password:  this.loginForm.controls.password.value}).subscribe(
      data => {
        if(!!data.token){
          localStorage.setItem('token', data.token);
        }
        else{
          //this.messagesService.add({'content':'Invalid Input','type':'error'});
          
          this.toast.success('dfaf','adfadfasdfasfd',{tapToDismiss: true, positionClass: 'toast-top-right', progressBar: true})
        }
        console.log(data);
        console.log(this.messagesService.messages);

      },
      err => {
        console.log(err);
      }
    )
  }

  onSubmit(form: NgForm){
    console.log(form)
    this.authenticationService.loginTest(form).subscribe(
      next=>{
        console.log(next)
        localStorage.setItem('token', next.token)
      },
      err =>{
        console.log(err)
      }
    )
    
  }

  login() {
    
  }
}
