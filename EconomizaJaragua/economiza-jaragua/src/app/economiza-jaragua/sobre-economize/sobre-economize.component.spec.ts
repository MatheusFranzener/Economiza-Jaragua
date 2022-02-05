import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreEconomizeComponent } from './sobre-economize.component';

describe('SobreEconomizeComponent', () => {
  let component: SobreEconomizeComponent;
  let fixture: ComponentFixture<SobreEconomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreEconomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreEconomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
