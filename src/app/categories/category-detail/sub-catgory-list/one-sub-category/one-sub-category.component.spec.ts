import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSubCategoryComponent } from './one-sub-category.component';

describe('OneSubCategoryComponent', () => {
  let component: OneSubCategoryComponent;
  let fixture: ComponentFixture<OneSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
