import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellcompanyComponent } from './sellcompany.component';

describe('SellcompanyComponent', () => {
  let component: SellcompanyComponent;
  let fixture: ComponentFixture<SellcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellcompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
