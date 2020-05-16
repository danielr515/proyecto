import { Injectable } from '@angular/core';
import { SkillsStore } from './skills.store';
import { action } from '@datorama/akita';
import { Skill } from './skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsAction {
  constructor(protected store: SkillsStore) { }

  @action('updateSkills')
  updateSkills(skills: Skill[]) {
    this.store.update({
      skills
    });
  }

  @action('updateClassSkills')
  updateClassSkills(skills) {
    this.store.update({
      classSkills: skills
    });
  }

  @action('updateClassPassives')
  updateClassPassives(skills) {
    this.store.update({
      classPassives: skills
    });
  }

  @action('updateClassUltimates')
  updateClassUltimates(skills) {
    this.store.update({
      classUltimates: skills
    });
  }

}
