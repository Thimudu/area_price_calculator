import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  area : any;
  price: any;

  calculate(){
    if(this.area <= 0.025){
      this.price = 2850;
    } else if (this.area <= 0.05){
      this.price = 3400;
    } else if (this.area <= 0.1){
      this.price = 3900;
    } else if (this.area <= 0.2){
      this.price = 4400;
    } else if (this.area <= 0.4){
      this.price = 5300;
    } else if (this.area <= 1.0){
      this.price = 6300;
    } else if (this.area <= 2.0){
      this.price = 7400;
    } else {
      this.price = 7400 + ((this.area - 2) * 1000)
    }
  }
}
