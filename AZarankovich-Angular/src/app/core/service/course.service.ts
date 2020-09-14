import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {ICourse} from '../../interfaces/ICourse';
import {Course} from '../../entity/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private dataService: DataService) {
  }

  public getCourses(): ICourse[] {
    return this.dataService.courses;
  }

  public createItem(title: string, description: string, duration: number, topRated: boolean): ICourse {
    const course = new Course(this.getLatestIdNumber() + 1, title, description, duration, new Date(), topRated);
    this.dataService.courses.push(course);
    return course;
  }

  public getItemById(id: number): ICourse {
    return this.dataService.courses.find(x => x.id === id);
  }

  public updateItem(item: Course): ICourse {
    for (const course of this.dataService.courses) {
      if (course.id === item.id) {
        return course;
      }
    }
  }

  public removeItem(id: number): ICourse[] {
    this.dataService.courses = this.dataService.courses.filter((course: ICourse) => course.id !== id);
    return this.dataService.courses;
  }

  private getLatestIdNumber(): number {
    const courses = this.dataService.courses;
    return courses[courses.length - 1].id;
  }

}
