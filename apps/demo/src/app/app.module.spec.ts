import { async, TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';

describe('AppModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppModule).toBeDefined();
  });
});
