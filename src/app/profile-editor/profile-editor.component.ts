import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.less']
})
export class ProfileEditorComponent implements OnInit {

  profile = new FormGroup({
    firstName: new FormControl('Derek'),
    lastName: new FormControl('Ji')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profile.value);
  }

}
