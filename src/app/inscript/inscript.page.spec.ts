import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptPage } from './inscript.page';

describe('InscriptPage', () => {
  let component: InscriptPage;
  let fixture: ComponentFixture<InscriptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
