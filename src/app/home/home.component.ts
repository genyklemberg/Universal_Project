import { Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {SubscriberService} from '../services/subscriber.service';
import {User} from "app/shared/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SubscriberService, AngularFireDatabase]
})
export class HomeComponent implements OnInit {
  user: User;
  newUser = this._resetNewUserObj();
  subscribeForm: FormGroup;
  name: string;
  email: string;
  message: string;
  date: Date;
  submitted = false;

  constructor(private subscriberService: SubscriberService) { }

  ngOnInit() {
    this.subscribeForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null)
    });
  }

  addUser (name, email, message, date){
    // TODO: add form validation
    this.newUser = {
      name,
      email,
      message,
      date
    }

    this.subscriberService.addNewUser(this.newUser);
    // TODO: need to implement return promise method if event added successfully
    this.newUser = this._resetNewUserObj();
  }

  private _resetNewUserObj(){
    let user: User = {
      name: '',
      email: '',
      message: '',
      date: new Date()
    };
    return user;
  }

  onSubmit(value) {
    this.name = value.name;
    this.email = value.email;
    this.message = value.message;
    this.date = new Date();
    this.addUser(this.name, this.email, this.message, this.date);
    this.subscribeForm.reset();
    this.submitted = true;
  }

}
