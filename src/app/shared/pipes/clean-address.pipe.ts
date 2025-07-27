import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanAddress'
})
export class CleanAddressPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    const parts = value.split(','); // separar por coma
    if (parts.length <= 1) {
      return value;
    }

    parts.pop();
    return parts.join(',').trim();
  }

}
