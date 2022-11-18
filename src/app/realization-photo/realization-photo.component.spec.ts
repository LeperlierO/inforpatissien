import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationPhotoComponent } from './realization-photo.component';

describe('RealizationPhotoComponent', () => {
  let component: RealizationPhotoComponent;
  let fixture: ComponentFixture<RealizationPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizationPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizationPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
