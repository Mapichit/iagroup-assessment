import { Component, OnInit } from '@angular/core';
import {triangleService} from "../service/triangle.service";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-assessment3-triangle',
  templateUrl: './assessment3-triangle.component.html',
  styleUrls: ['./assessment3-triangle.component.scss']
})
export class Assessment3TriangleComponent implements OnInit {

  area: number = 0;


  constructor(private TriangleService: triangleService, private formBuilder: FormBuilder,) { }

  triangleForm:FormGroup = this.formBuilder.group({
    base: '',
    height: ''
  });


  ngOnInit(): void {
    let arrBase = [1,2,0,1,5,4,1,4,6,2,2,3]
    let arrMultiply = [];

    for (let i = 13; i >= 2; i--){
      arrMultiply.push(i);
    }

    this.arrTotal(arrBase,arrMultiply)
  }

  arrTotal(base:number[],multiple:number[]){
    let arrTotal= [];
    let totalSum = 0;
    for(let i = 0; i < base.length; i++){
      arrTotal.push(base[i] * multiple[i])
    }

    for(let i = 0; i <arrTotal.length; i++){
      totalSum += arrTotal[i]
    }

    let calculatedNumber = 11 - (totalSum % 11);
    if ((totalSum % 11).toString().length == 2){

    }
  }

  onSubmit(){
    this.getTriangle(this.triangleForm.value.base, this.triangleForm.value.height)
    window.open(
      'http://localhost:3000/triangle?base='
      + this.triangleForm.value.base
      + '&height='
      + this.triangleForm.value.height,"_blank"
    )
  }

  getTriangle(base:number,height:number){
    this.TriangleService.getTriangle(base,height).subscribe(res => {
      this.area = res['area']
    })
  }

}
