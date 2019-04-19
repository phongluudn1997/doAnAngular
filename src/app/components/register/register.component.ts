import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  user: any;
  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  onSubmit(){
    this.authService.register(this.user)
  }

}
