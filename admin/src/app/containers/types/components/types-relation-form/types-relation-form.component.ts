import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-types-relation-form',
  templateUrl: './types-relation-form.component.html',
  styleUrls: ['./types-relation-form.component.scss']
})
export class TypesRelationFormComponent implements OnInit {
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
      typeatk: ['', Validators.required],
      typedef: ['', Validators.required],
      relation: ['', Validators.required]
    });
  }

  onSubmitForm() {
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    }
  }
}
