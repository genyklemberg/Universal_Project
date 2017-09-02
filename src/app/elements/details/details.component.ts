import { Component, OnInit, Input } from '@angular/core';
import {Element} from '../element';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() element: Element;
  constructor() { }

  ngOnInit() {
  }

}
