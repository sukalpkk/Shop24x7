import { TestBed } from '@angular/core/testing';

import { AdminAddNewProductService } from './admin-add-new-product.service';

describe('AdminAddNewProductService', () => {
  let service: AdminAddNewProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAddNewProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
