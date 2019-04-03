import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EmailValidation} from '../../Utilities/UtilityStringFunc';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  form;

  constructor(private  fb: FormBuilder, private auth: AuthService) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, EmailValidation()]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {validators: this.matchingFields('password', 'confirmPassword')});
  }

  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.form.valid);
    console.log(this.form.errors);
    this.auth.register(this.form.value);
  }

  isValid(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }

  matchingFields(field1, field2) {
    return form => {
      if (form.controls[field1].value !== form.controls[field2].value) {
        return {
          misMatch: true
        };
      }
    };
  }
}
