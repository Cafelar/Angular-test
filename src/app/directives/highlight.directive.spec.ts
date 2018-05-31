
import { TestBed, inject } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HighlightDirective]
    });
  });

  it('should be created', inject([HighlightDirective], (service: HighlightDirective) => {
    expect(service).toBeTruthy();
  }));
});
