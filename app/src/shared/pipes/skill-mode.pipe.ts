import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skillMode'
})
export class SkillModePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let txt = '';
    switch (value) {
      case 'ATK':
        txt = 'Ataque';
        break;
      case 'DEF':
        txt = 'Defensa';
        break;
      case 'SPATK':
        txt = 'Ataque especial';
        break;
      case 'SPDEF':
        txt = 'Defensa especial';
        break;
      case 'SPEED':
        txt = 'Velocidad';
        break;
      case 'HEAL':
        txt = 'Curación';
        break;
      case 'WEAK':
        txt = 'Debilidad';
        break;
      case 'RED':
        txt = 'Reducción de daño';
        break;
    }
    return txt;
  }

}
