import { TestBed, inject } from '@angular/core/testing';

import { YandexTranslatorService } from './yandex-translator.service';

describe('YandexTranslatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YandexTranslatorService]
    });
  });

  it('should ...', inject([YandexTranslatorService], (service: YandexTranslatorService) => {
    expect(service).toBeTruthy();
  }));
});
