import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = fb.group({
      name: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.auth.authenticate(this.form.value).subscribe(res => {
        console.log(res)
        localStorage.setItem("Authorization", res.Authorization);
        this.router.navigate(["/"])
      })




    } else return;
  }

}
