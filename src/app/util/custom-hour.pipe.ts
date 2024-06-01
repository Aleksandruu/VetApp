import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customHour',
  standalone: true,
})
export class CustomHourPipe implements PipeTransform {
  transform(value: number): string {
    const integer = Math.floor(value);
    const minute = Math.floor((value - integer) * 100)
      .toString()
      .padStart(2, '0');
    return integer.toString() + ':' + minute;
  }
}
