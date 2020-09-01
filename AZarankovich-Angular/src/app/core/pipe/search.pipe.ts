import {Pipe, PipeTransform} from '@angular/core';
import {ICourse} from '../../interfaces/ICourse';

@Pipe({
  name: 'searchPipe'
})

// tslint:disable-next-line:class-name
export class SearchPipe implements PipeTransform {
  public transform(items: ICourse[], searchText: string): any[] {

    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.title.toLowerCase().includes(searchText);
    });

  }
}
