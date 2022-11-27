import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeChronologyComponent } from './recipe-chronology.component';

describe('RecipeChronologyComponent', () => {
  let component: RecipeChronologyComponent;
  let fixture: ComponentFixture<RecipeChronologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeChronologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeChronologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
