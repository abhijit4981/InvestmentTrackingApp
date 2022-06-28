import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NseliveComponent } from './nselive.component';

describe('NseliveComponent', () => {
  let component: NseliveComponent;
  let fixture: ComponentFixture<NseliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NseliveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NseliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
