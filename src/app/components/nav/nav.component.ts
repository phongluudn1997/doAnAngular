import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  userName: String = localStorage.getItem('userName');
  
  constructor(private authService: AuthenticationService) { }

  
  ngOnInit() {
    console.log(this.userName);
    const hello = 123;
  }

}
