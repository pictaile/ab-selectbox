import { TestBed } from '@angular/core/testing';

import { SelectboxService } from './selectbox.service';

describe('SelectboxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectboxService = TestBed.get(SelectboxService);
    expect(service).toBeTruthy();
  });
});
