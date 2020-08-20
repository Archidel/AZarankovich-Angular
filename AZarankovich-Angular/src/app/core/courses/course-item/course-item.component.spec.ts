import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseItemComponent} from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

  // TODO: Cannot read property 'title' of undefined
 /* it('should be ok', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const el = input.nativeElement;

      expect(el.value).toBe(new Course(999, 'test', 'test', 10, new Date()));
      el.dispatchEvent(new Event('input'));

      expect(fixture.componentInstance.course.id).toBe(999);
    });
  }));*/


  // TODO: Cannot read property 'title' of undefined
  // TODO: Cannot read property 'id' of undefined
/*  it('should emit on click', () => {
    spyOn(component.onDelete, 'emit');
    component.delete();
    expect(component.onDelete.emit).toHaveBeenCalled();
  });*/
