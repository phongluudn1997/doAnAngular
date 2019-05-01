import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private toast: ToastrService) { }



  ngOnInit() {
    this.userProfileForm = new FormGroup({
      address: new FormControl({ value: '', }),
      fullname: new FormControl({ value: '' }),
      phone: new FormControl({ value: '' }),
      email: new FormControl({ value: '' })
    })
    // this.userProfileForm = this.formBuidler.group({
    //   address: [''],
    //   fullname: '',
    //   phone: '',
    //   email : ['',]
    // })
    this.userService.getUserInfo(localStorage.getItem('userId')).subscribe(next => {
      this.user = next.profile;
      this.userProfileForm.patchValue(this.user)
    })

  }

  get f() {
    return this.userProfileForm.controls;
  }

  onSubmit() {
    console.log(this.userProfileForm.value);
    this.userService.updateUserInfo(localStorage.getItem('userId'), this.userProfileForm.value)
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
