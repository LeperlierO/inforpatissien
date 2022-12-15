import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationPhotosFormComponent } from './realization-photos-form.component';

describe('RealizationPhotosFormComponent', () => {
  let component: RealizationPhotosFormComponent;
  let fixture: ComponentFixture<RealizationPhotosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizationPhotosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizationPhotosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
