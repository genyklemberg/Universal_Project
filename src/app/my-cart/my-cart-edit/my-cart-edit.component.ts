import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Part} from '../../shared/part';

@Component({
  selector: 'app-my-cart-edit',
  templateUrl: './my-cart-edit.component.html',
  styleUrls: ['./my-cart-edit.component.css']
})
export class MyCartEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() partAdded = new EventEmitter<Part>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newPart = new Part(ingName, ingAmount);
    this.partAdded.emit(newPart);
  }

}
