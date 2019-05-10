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
      fullname: [],
      address: [''],
      phone: [''],
      email: ['']
    })
    this.userService.getUserInfo().subscribe(next => {
      this.spinner.hide();
      this.user = next;
      console.log(this.user);
      this.userProfileForm.controls.fullname.setValue(this.user.profile.fullname);
      this.f.address.setValue(this.user.profile.address);
      this.f.phone.setValue(this.user.profile.phone);
      this.f.email.setValue(this.user.profile.email)
    }, err => {
        this.spinner.hide();
        console.log(err)
    })

  }

  get f() {
    return this.userProfileForm.controls;
  }

  onSubmit() {
    console.log(this.userProfileForm.value);
    this.userService.updateUserInfo(this.userProfileForm.value)
      .subscribe(
        (next) => {
          console.log(next);
          this.toast.success('Update successfully', 'Success');
        },
        (err) => {
          this.router.navigateByUrl('/profile');
          this.toast.error('Please try again', 'Error');
        }
      )
  }

}
