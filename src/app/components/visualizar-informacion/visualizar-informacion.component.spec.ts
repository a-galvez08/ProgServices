import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarInformacionComponent } from './visualizar-informacion.component';

describe('VisualizarInformacionComponent', () => {
  let component: VisualizarInformacionComponent;
  let fixture: ComponentFixture<VisualizarInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarInformacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
