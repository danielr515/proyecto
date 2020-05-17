import { Injectable } from '@angular/core';
import { SkillsApi } from './skills.api';
import { SkillsAction } from './skills.actions';
import { SkillsQuery } from './skills.query';
import { HttpResponse } from '@angular/common/http';
import { AppQuery } from 'src/core/state/app.query';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor(
    private api: SkillsApi,
    private action: SkillsAction,
    private query: SkillsQuery,
    private appQuery: AppQuery
  ) { }

  updateAllSkills() {
    this.api.getAllSkills(this.getToken()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateSkills(response.body);
      }
    });
  }
  updateAllSkillsByClass() {
    this.api.getSkillsByClass('SKILL', this.getToken()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateClassSkills(response.body);
      }
    });
    this.api.getSkillsByClass('PASSIVE', this.getToken()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateClassPassives(response.body);
      }
    });
    this.api.getSkillsByClass('ULTIMATE', this.getToken()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateClassUltimates(response.body);
      }
    });
  }
  updateClassSkills() {
    this.api.getSkillsByClass('SKILL', this.getToken()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateClassSkills(response.body);
      }
    });
  }
  updateClassPassives() {
    this.api.getSkillsByClass('PASSIVE', this.getToken()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateClassPassives(response.body);
      }
    });
  }
  updateClassUltimates() {
    this.api.getSkillsByClass('ULTIMATE', this.getToken()).subscribe((response: HttpResponse<any>) => {
      if (response.ok) {
        this.action.updateClassUltimates(response.body);
      }
    });
  }
  addSkill(skill) {
    this.api.addSkill(skill, this.getTokenAndUname()).subscribe((response: HttpResponse<any>) => {
      console.log(response);
    });
  }
  getTokenAndUname() {
    const data = { token: '', uname: '' };
    this.appQuery.selectSessionToken().subscribe(tk => {
      data.token = tk;
    });
    this.appQuery.selectUser().subscribe(user => {
      data.uname = user.uname;
    });
    return data;
  }
  getToken() {
    let token = '';
    this.appQuery.selectSessionToken().pipe(take(1)).subscribe(tk => {
      token = tk;
    });
    return token;
  }

}
