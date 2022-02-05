import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesMercadosComponent } from './informacoes-mercados.component';

describe('InformacoesMercadosComponent', () => {
  let component: InformacoesMercadosComponent;
  let fixture: ComponentFixture<InformacoesMercadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesMercadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesMercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
