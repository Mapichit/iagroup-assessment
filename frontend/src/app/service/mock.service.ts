import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import {iMock} from "../interface/mock.interface";

@Injectable({providedIn: 'root'})

export class mockService {
  static injector: Injector;
  constructor(private http: HttpClient) {}

  getMock(){
    return this.http.get<iMock[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
