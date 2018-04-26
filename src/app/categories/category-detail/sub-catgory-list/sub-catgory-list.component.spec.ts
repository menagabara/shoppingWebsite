import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatgoryListComponent } from './sub-catgory-list.component';

describe('SubCatgoryListComponent', () => {
  let component: SubCatgoryListComponent;
  let fixture: ComponentFixture<SubCatgoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCatgoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCatgoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
