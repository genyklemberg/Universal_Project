import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Element} from '../../element';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() element: Element;
  @Output() elementSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.elementSelected.emit();
  }

}
