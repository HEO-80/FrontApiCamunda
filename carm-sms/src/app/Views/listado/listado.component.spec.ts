import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoComponent } from 'c:/Proyectos/Frontend/Angular/carm-sms/src/app/Views/listado/listado.component';


describe('ListadoComponent', () => {
  let component: ListadoComponent;
  let fixture: ComponentFixture<ListadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoComponent]
    });
    fixture = TestBed.createComponent(ListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
