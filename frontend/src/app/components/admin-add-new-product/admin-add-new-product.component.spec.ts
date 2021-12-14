import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddNewProductComponent } from './admin-add-new-product.component';

describe('AdminAddNewProductComponent', () => {
  let component: AdminAddNewProductComponent;
  let fixture: ComponentFixture<AdminAddNewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddNewProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
