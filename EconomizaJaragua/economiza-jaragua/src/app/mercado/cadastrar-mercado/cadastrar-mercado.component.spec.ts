import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMercadoComponent } from './cadastrar-mercado.component';

describe('CadastrarMercadoComponent', () => {
  let component: CadastrarMercadoComponent;
  let fixture: ComponentFixture<CadastrarMercadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarMercadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
