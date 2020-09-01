import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show more button should log message', () => {
    const spy = spyOn(component, 'onLoadMoreClick');
    component.onLoadMoreClick();
    expect(spy).toHaveBeenCalled();
  });

  it('should delete element', () => {
    const before = component.courses.length;
    component.onDelete(component.courses[0].id);
    const after = component.courses.length;
    expect(after).toEqual(before - 1 );
  });

});
