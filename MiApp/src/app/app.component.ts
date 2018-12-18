import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'papito';
  nombre:string='Carlos';
  edad:number=22;

  getName():string{
    return this.nombre+" "+this.title+" "+this.edad;
  }
}
