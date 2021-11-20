import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgridComponent } from './newgrid.component';

describe('NewgridComponent', () => {
  let component: NewgridComponent;
  let fixture: ComponentFixture<NewgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
