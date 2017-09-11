import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {SubscriberService} from '../services/subscriber.service';
import {User} from 'app/shared/user';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SubscriberService, AngularFireDatabase],
  animations: [
    trigger('myAwesomeAnimation', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0.1,
      })),
      transition('show => hide', animate('1000ms ease-in'
      )),
    ]),
  ]
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
  state = 'show';
  submit = false;

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
    let that = this;
    if ( this.subscribeForm.get('name').valid && this.subscribeForm.get('email').valid) {
      this.name = value.name;
      this.email = value.email;
      this.message = value.message;
      this.date = new Date();
      this.addUser(this.name, this.email, this.message, this.date);
      this.subscribeForm.reset();
      this.myAnime();
      window.setTimeout(function() {
        console.log('work');
        that.submitted = true;
      }, 1000);
    } else { this.submit = true; }
  }

  myAnime() {
    this.state = (this.state === 'show' ? 'hide' : 'show');
  }

}
