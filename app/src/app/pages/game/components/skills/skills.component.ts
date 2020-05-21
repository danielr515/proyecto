import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  @Input() ownData;
  @Input() ownCurrChar;
  @Output() skillSelected: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  useSkill(skillid) {
    this.skillSelected.emit({ actionvalue: skillid, action: 'SKILL' });
  }
  useBasic() {
    this.skillSelected.emit({ actionvalue: 0, action: 'BASIC' });
  }
}
