import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'durationPipe'
})
export class DurationPipe implements PipeTransform {
  public transform(value: number): string {
    const hours = Math.floor(value / 60);

    if (hours === 0) {
      return value + ' min';
    }

    const mins = value - (hours * 60);
    return hours + 'h ' + mins + ' min';
  }
}
