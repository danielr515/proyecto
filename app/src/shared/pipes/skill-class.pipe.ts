import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillClass'
})
export class SkillClassPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let txt = '';
    switch (value) {
      case 'SKILL':
        txt = 'Habilidad';
        break;
      case 'PASSIVE':
        txt = 'Pasiva';
        break;
      case 'ULTIMATE':
        txt = 'Definitiva';
        break;
    }
    return txt;
  }

}
