import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuarioReactivoComponent } from './formuario-reactivo.component';

describe('FormuarioReactivoComponent', () => {
  let component: FormuarioReactivoComponent;
  let fixture: ComponentFixture<FormuarioReactivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormuarioReactivoComponent]
    });
    fixture = TestBed.createComponent(FormuarioReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
