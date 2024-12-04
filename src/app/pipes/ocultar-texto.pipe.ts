import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarTexto'
})
export class OcultarTextoPipe implements PipeTransform {
  transform(value: string, ocultar: boolean): string {
    return ocultar ? '*'.repeat(value.length) : value;
  }
}
