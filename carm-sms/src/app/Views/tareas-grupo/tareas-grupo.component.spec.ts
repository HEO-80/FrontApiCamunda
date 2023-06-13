import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasGrupoComponent } from './tareas-grupo.component';

describe('TareasGrupoComponent', () => {
  let component: TareasGrupoComponent;
  let fixture: ComponentFixture<TareasGrupoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasGrupoComponent]
    });
    fixture = TestBed.createComponent(TareasGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
