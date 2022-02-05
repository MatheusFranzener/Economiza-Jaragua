import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocoesMercadosComponent } from './promocoes-mercados.component';

describe('PromocoesMercadosComponent', () => {
  let component: PromocoesMercadosComponent;
  let fixture: ComponentFixture<PromocoesMercadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocoesMercadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocoesMercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
