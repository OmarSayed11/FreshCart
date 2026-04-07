import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingComponent } from './marketing.component';

describe('MarketingComponent', () => {
  let component: MarketingComponent;
  let fixture: ComponentFixture<MarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MarketingComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
