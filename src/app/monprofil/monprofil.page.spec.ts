import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonprofilPage } from './monprofil.page';

describe('MonprofilPage', () => {
  let component: MonprofilPage;
  let fixture: ComponentFixture<MonprofilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonprofilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonprofilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
