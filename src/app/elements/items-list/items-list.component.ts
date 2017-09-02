import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Element} from '../element';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  @Output() itemWasSelected = new EventEmitter<Element>();
  elements: Element[] = [
    new Element ('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Element('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onItemSelected(element: Element) {
    this.itemWasSelected.emit(element);
  }

}
