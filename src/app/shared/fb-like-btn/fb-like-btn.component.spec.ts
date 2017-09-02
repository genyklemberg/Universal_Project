import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbLikeBtnComponent } from './fb-like-btn.component';

describe('FbLikeBtnComponent', () => {
  let component: FbLikeBtnComponent;
  let fixture: ComponentFixture<FbLikeBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbLikeBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbLikeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
