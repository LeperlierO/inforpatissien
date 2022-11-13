import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationFormComponent } from './realization-form.component';

describe('RealizationFormComponent', () => {
  let component: RealizationFormComponent;
  let fixture: ComponentFixture<RealizationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
