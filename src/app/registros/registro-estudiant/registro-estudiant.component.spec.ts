import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEstudiantComponent } from './registro-estudiant.component';

describe('RegistroEstudiantComponent', () => {
  let component: RegistroEstudiantComponent;
  let fixture: ComponentFixture<RegistroEstudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEstudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEstudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
