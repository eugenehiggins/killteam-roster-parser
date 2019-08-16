import { TestBed } from '@angular/core/testing';

import { ParseHtmlService } from './parse-html.service';

describe('ParseHtmlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParseHtmlService = TestBed.get(ParseHtmlService);
    expect(service).toBeTruthy();
  });
});
