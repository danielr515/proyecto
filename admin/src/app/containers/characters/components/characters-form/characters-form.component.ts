import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-characters-form',
  templateUrl: './characters-form.component.html',
  styleUrls: ['./characters-form.component.scss']
})
export class CharactersFormComponent implements OnInit {
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
      subname: ['', Validators.required],
      skill1: [null, Validators.required],
      skill2: [null, Validators.required],
      passive: [null, Validators.required],
      ultimate: [null, Validators.required],
      hp: [400, Validators.required],
      mana: [200, Validators.required],
      atk: [45, Validators.required],
      def: [45, Validators.required],
      spatk: [45, Validators.required],
      spdef: [45, Validators.required],
      speed: [45, Validators.required],
      type1: [null, Validators.required],
      type2: [null]
    });
  }

  onSubmitForm() {
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('--------- Válido ----------');
      this.submitForm.emit(this.form.value);
    }
  }

  patchForm() {
    this.form.patchValue(
      {
        hp: this.form.value.hp,
        mana: this.form.value.mana,
        atk: this.form.value.atk,
        def: this.form.value.def,
        spatk: this.form.value.spatk,
        spdef: this.form.value.spdef,
        speed: this.form.value.speed,
      }
    );
  }

}
