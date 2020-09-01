import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {
  public transform(value: any): any {
    const sortedValues = value.sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime());
    return sortedValues;
  }
}
