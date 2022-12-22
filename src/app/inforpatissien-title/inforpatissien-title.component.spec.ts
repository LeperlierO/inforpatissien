import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforpatissienTitleComponent } from './inforpatissien-title.component';

describe('InforpatissienTitleComponent', () => {
  let component: InforpatissienTitleComponent;
  let fixture: ComponentFixture<InforpatissienTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforpatissienTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforpatissienTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
