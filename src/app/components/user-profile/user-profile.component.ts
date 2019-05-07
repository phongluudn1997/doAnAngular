import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  form: FormGroup
  user: any;
  userProfileForm: FormGroup;
  constructor(
    private userService: UserService,
    private formBuidler: FormBuilder,
    private router: Router,
    private toast: ToastrService,
    private spinner: NgxSpinnerService) { }



  ngOnInit() {
    this.spinner.show();
    this.userProfileForm = this.formBuidler.group({
      fullName: [],
      address: [''],
      phoneNumber: [''],
      email: ['']
    })
    this.userService.getUserInfo(localStorage.getItem('userId')).subscribe(next => {
      this.spinner.hide();
      this.user = next.user;
      console.log(this.user);
      this.userProfileForm.controls.fullName.setValue(this.user.fullName);
      this.f.address.setValue(this.user.address);
      this.f.phoneNumber.setValue(this.user.phoneNumber);
      this.f.email.setValue(this.user.email)
    })

  }

  get f() {
    return this.userProfileForm.controls;
  }

  onSubmit() {
    console.log(this.userProfileForm.value);
    this.userService.updateUserInfo( this.userProfileForm.value)
      .subscribe(
        (next) => {
          console.log(next);
          this.router.navigateByUrl('/profile');
          this.toast.success('Update successfully', 'Success');
        },
        (err) => {
          this.router.navigateByUrl('/profile');
          this.toast.error('Please try again', 'Error');
        }
      )
  }

}
