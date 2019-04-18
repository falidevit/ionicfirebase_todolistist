import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlLiteTodoPage } from './sql-lite-todo.page';

describe('SqlLiteTodoPage', () => {
  let component: SqlLiteTodoPage;
  let fixture: ComponentFixture<SqlLiteTodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlLiteTodoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlLiteTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
