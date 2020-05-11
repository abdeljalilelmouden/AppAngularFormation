import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteFormationComponent } from './ajoute-formation.component';

describe('AjouteFormationComponent', () => {
  let component: AjouteFormationComponent;
  let fixture: ComponentFixture<AjouteFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouteFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
