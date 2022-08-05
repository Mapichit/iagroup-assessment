import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable({providedIn: 'root'})

export class triangleService {
  static injector: Injector;
  constructor(private http: HttpClient) {}
  url = "http://localhost:3000/"
  // getTriangle(data:any){
  //   return this.http.post<any>(this.url + 'triangle',data);
  // }

  getTriangle(base:number, height:number){
    return this.http.get<any>(this.url + 'triangle?base='+ base + '&height=' + height)
  }
}
