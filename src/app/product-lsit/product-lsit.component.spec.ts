import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLsitComponent } from './product-lsit.component';

describe('ProductLsitComponent', () => {
  let component: ProductLsitComponent;
  let fixture: ComponentFixture<ProductLsitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLsitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
