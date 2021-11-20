import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcellComponent } from './newcell.component';

describe('NewcellComponent', () => {
  let component: NewcellComponent;
  let fixture: ComponentFixture<NewcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
