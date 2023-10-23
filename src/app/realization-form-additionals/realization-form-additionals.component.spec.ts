import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationFormAdditionalsComponent } from './realization-form-additionals.component';

describe('RealizationFormAdditionalsComponent', () => {
  let component: RealizationFormAdditionalsComponent;
  let fixture: ComponentFixture<RealizationFormAdditionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizationFormAdditionalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizationFormAdditionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
