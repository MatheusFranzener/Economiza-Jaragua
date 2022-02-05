import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresOfertasComponent } from './melhores-ofertas.component';

describe('MelhoresOfertasComponent', () => {
  let component: MelhoresOfertasComponent;
  let fixture: ComponentFixture<MelhoresOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelhoresOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhoresOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
