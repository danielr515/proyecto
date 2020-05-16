import { Injectable } from '@angular/core';
import { SkillsStore } from './skills.store';
import { action } from '@datorama/akita';
import { Skill } from './skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsAction {
  constructor(protected store: SkillsStore) { }

  @action('updateUser')
  updateSkills(skills: Skill[]) {
    this.store.update({
      skills
    });
  }

}
