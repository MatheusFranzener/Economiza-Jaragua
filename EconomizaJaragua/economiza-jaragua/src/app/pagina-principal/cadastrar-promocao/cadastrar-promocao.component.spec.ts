import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPromocaoComponent } from './cadastrar-promocao.component';

describe('CadastrarPromocaoComponent', () => {
  let component: CadastrarPromocaoComponent;
  let fixture: ComponentFixture<CadastrarPromocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPromocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
