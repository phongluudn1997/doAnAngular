import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

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
    private formBuilder: FormBuilder,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['', Validators.required],
    });
  }
  
  get f(){
    return this.registerForm.controls;
  }
  onClick(){
    this.submitted = true;
    if(this.registerForm.invalid) return;
    console.log(this.registerForm.value)

    this.authService.register(this.registerForm.value).subscribe(next=>{

        this.toast.success('Đăng kí thành công', 'Success');
        this.router.navigateByUrl('/login')

    }, err => {
      this.toast.error('Trùng username, vui lòng đổi username khác', 'Error')
    })
  }

}
