import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private _userService: UserService, private router: Router) {
    this.form = fb.group({
      name: ['', [Validators.required]],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  save(): void {
    if (this.form.valid) {
      console.log(this.form.value)
      this._userService.save(this.form.value).subscribe(res => {
        console.log(res);
        this.router.navigate(['/logout']);

      })

    }
  }
}
