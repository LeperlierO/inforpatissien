import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeValidationComponent } from './recipe-validation.component';

describe('RecipeValidationComponent', () => {
  let component: RecipeValidationComponent;
  let fixture: ComponentFixture<RecipeValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
