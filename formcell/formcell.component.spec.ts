import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCellComponent } from './formcell.component';

describe('FormcellComponent', () => {
  let component: FormCellComponent;
  let fixture: ComponentFixture<FormCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
