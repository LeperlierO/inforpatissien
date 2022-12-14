import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationCommentComponent } from './realization-comment.component';

describe('RealizationCommentComponent', () => {
  let component: RealizationCommentComponent;
  let fixture: ComponentFixture<RealizationCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizationCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizationCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
