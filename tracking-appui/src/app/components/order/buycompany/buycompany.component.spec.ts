import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycompanyComponent } from './buycompany.component';

describe('BuycompanyComponent', () => {
  let component: BuycompanyComponent;
  let fixture: ComponentFixture<BuycompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuycompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuycompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
