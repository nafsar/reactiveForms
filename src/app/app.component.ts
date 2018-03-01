import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  reactiveForm: FormGroup;
  result: any;
  textMessage = '';
  name = '';
  email = '';
  nameError = 'Please enter your name';
  emailError = 'Invalid e-mail address. Please try again (yourname@example.com)';
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'textMessage': []
    });
  }

  serverMock(result) {
    if (this.reactiveForm.valid) {
      this.textMessage = result.textMessage;
      this.name = result.name;
      this.email = result.email;
    }
  }
}
