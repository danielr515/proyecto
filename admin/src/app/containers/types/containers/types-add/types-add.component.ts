import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TypesService } from '../../state/types.service';
import { TypesQuery } from '../../state/types.query';

@Component({
  selector: 'app-types-add',
  templateUrl: './types-add.component.html',
  styleUrls: ['./types-add.component.scss']
})
export class TypesAddComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    private service: TypesService,
    private formBuilder: FormBuilder,
    private query: TypesQuery
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  addType() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.service.addType(this.form.value);
    }
  }
}
