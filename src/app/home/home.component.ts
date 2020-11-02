import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  constructor(private _userService: UserService) { }

  ngOnInit(): void {

    this._userService.getUser().subscribe(response => {
      this.user = response;
      console.log(this.user)
    });

  }

  deleteUser(id: string) {
    console.log("hello")
    console.log(id)
    this._userService.deleteUser(id).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
  }

}
