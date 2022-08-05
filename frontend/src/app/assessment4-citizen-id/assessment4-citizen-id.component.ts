import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-assessment4-citizen-id',
  templateUrl: './assessment4-citizen-id.component.html',
  styleUrls: ['./assessment4-citizen-id.component.scss']
})
export class Assessment4CitizenIdComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  citizenIdForm:FormGroup = this.formBuilder.group({
    id: '',
  });

  ngOnInit(): void {
  }

  onSubmit(){
    window.open(
      'http://localhost:3000/citizenId?id='
      + this.citizenIdForm.value.id,
    "_blank"
    )
  }

}
