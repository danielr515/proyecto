import { Injectable } from '@angular/core';
import { SkillsState, SkillsStore } from './skills.store';
import { Query } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class SkillsQuery extends Query<SkillsState> {
  constructor(protected store: SkillsStore) {
    super(store);
  }

  selectSkills() {
    return this.select(state => state.skills);
  }
  selectClassSkills() {
    return this.select(state => state.classSkills);
  }
  selectClassPassives() {
    return this.select(state => state.classPassives);
  }
  selectClassUltimates() {
    return this.select(state => state.classUltimates);
  }
}
