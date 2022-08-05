import { Component, OnInit } from '@angular/core';
import {mockService} from "../service/mock.service";
import {iMock} from "../interface/mock.interface";

@Component({
  selector: 'app-assessment2-api-call',
  templateUrl: './assissment2-api-call.component.html',
  styleUrls: ['./assissment2-api-call.component.scss']
})
export class Assissment2ApiCallComponent implements OnInit {

  mockArray: iMock[] = [];

  constructor(private MockService: mockService) { }

  ngOnInit(): void {
    this.getMock();
  }

  getMock(){
    this.MockService.getMock().subscribe( (res:any) => {

      for(let i = 0; i < 8; i++){
        this.mockArray.push(res[i]);
      }
      console.log(this.mockArray);
    })
  }

}
