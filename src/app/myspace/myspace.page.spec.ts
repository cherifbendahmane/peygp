import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyspacePage } from './myspace.page';

describe('MyspacePage', () => {
  let component: MyspacePage;
  let fixture: ComponentFixture<MyspacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyspacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyspacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
