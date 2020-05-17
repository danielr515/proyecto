import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  @Input() types;
  @Output() submitForm: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      class: ['', Validators.required],
      mode: ['', Validators.required],
      cost: [0, Validators.required],
      damage: [1, Validators.required],
      type: [null, Validators.required]
    });
  }

  onSubmitForm() {
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('-------------- Válido --------------');
      this.submitForm.emit(this.form.value);
    }
  }

  patchForm() {
    this.form.patchValue(
      {
        cost: this.form.value.cost,
        damage: this.form.value.damage
      }
    );
  }
}
