import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment5-diamond',
  templateUrl: './assessment5-diamond.component.html',
  styleUrls: ['./assessment5-diamond.component.scss']
})
export class Assessment5DiamondComponent implements OnInit {

  diamond = ""
  diamondArr:string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.createDiamond()
  }

  createDiamond(){
    let n = 4
    let l = n * 2 //horizontal tiles length

    for(let i = 1; i <= (n * 2) -1 ; i++){

      if(i <= n){ //Top half
        for(let j = 1; j <= l; j++ ){
          if(j == (n + 1 - i) || j == (n + i )){
            this.diamond += i;
          } else if (j < (n + 1 - i) || j > (n + i)) {
            this.diamond += " ";
          } else {
            this.diamond += "*";
          }
        }
      } else { //Bottom Half
        let I =  (n - (i - n));
        for(let k = 1; k <= l; k++ ){
          if(k == (n + 1 - I) || k == (n + I) ){
            this.diamond += I;
          } else if (k < (n + 1 - I) || k > (n + I)){
            this.diamond += " ";
          }else {
            this.diamond += "*";
          }
        }
      }



      this.diamondArr.push(this.diamond);
      this.diamond = "";
    }
    console.log(this.diamondArr);
  }

}
