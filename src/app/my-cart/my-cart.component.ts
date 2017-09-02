import { Component, OnInit } from '@angular/core';
import {Part} from '../shared/part';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  parts: Part[] = [
    new Part('Apples', 5),
    new Part('Tomatoes', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

  onPartAdded(part: Part) {
    this.parts.push(part);
  }
}
