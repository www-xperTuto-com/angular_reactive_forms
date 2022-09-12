import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'XperTuto.com : Angular Reactive forms Approach';

  userForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.userForm = this.formBuilder.group({
      pseudo: new FormControl('XperTuto', Validators.required),
      name: new FormControl('Aouidane', Validators.required),
      age: new FormControl(''),
      email: new FormControl(''),
    });
  }

  adduser() {
    // call API
    console.log(this.userForm.getRawValue());
  }
}
