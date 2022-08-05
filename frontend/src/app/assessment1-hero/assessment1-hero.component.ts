import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment1-hero',
  templateUrl: './assessment1-hero.component.html',
  styleUrls: ['./assessment1-hero.component.scss']
})
export class Assessment1HeroComponent implements OnInit {

  heroName = "";
  diamond = ""
  diamondArr:string[] = [];

  constructor() { }

  ngOnInit(): void {

  }



  chooseHero(event:any){

    this.heroName=event.target.innerHTML
  }

}
