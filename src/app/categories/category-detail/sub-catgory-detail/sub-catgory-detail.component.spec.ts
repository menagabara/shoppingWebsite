import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatgoryDetailComponent } from './sub-catgory-detail.component';

describe('SubCatgoryDetailComponent', () => {
  let component: SubCatgoryDetailComponent;
  let fixture: ComponentFixture<SubCatgoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCatgoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCatgoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
