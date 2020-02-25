import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TestService } from '../test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  text = "Contact page";
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    text: ''
  }

  submitted = false;
  users;

  constructor(private testService: TestService) {
    this.users = this.testService.getUsers();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      'text': new FormControl(this.contact.text, Validators.required)
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }

}
