import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.less']
})
export class NameEditorComponent implements OnInit {

  name = new FormControl('hello');


  constructor(private fb: FormBuilder) { }

  age = this.fb.control('3');

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Julia');
  }

}
