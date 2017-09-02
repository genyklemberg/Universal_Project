import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartEditComponent } from './my-cart-edit.component';

describe('MyCartEditComponent', () => {
  let component: MyCartEditComponent;
  let fixture: ComponentFixture<MyCartEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCartEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
