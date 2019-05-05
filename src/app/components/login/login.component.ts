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
  message: Message = { 'content': '', 'type': '' };
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

    // console.log(this.messagesService.messages)
    this.submitted = true;
    console.log(this.submitted)
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.controls.email.value)
    this.authenticationService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
      .subscribe(
        next => {
          console.log(next)
          if (next.message === 'error') {
            this.toast.error(next.err, 'Error')
          }
          else {
            localStorage.setItem('token', next.token)
            localStorage.setItem('userId', next.userId)
            this.router.navigateByUrl('/')
            this.toast.success('Wellcome to our app', 'Login successfully', { tapToDismiss: true, positionClass: 'toast-top-right', progressBar: true })
          }},
        error => {
          this.toast.error('Please try again', 'Login failed', { tapToDismiss: true, positionClass: 'toast-top-right', progressBar: true })
        })
  }


}
