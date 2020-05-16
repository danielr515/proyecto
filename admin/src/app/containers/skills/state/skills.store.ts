
import { Injectable } from '@angular/core';
import { Skill } from './skills.model';
import { Store, StoreConfig } from '@datorama/akita';



export interface SkillsState {
  skills: Skill[];
}

export function createInitialState() {
  return {
    skills: []
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'Skills' })
export class SkillsStore extends Store<SkillsState> {
  constructor() {
    super(createInitialState());
  }
}
