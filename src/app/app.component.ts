import { Component } from '@angular/core';
import { NbRouteTab } from "@nebular/theme";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Resital';
  tabs: NbRouteTab[] = [
    {
      title: 'RESITAL',
      route: '/resital/home'
    },
    {
      title: 'Products',
      route: '/resital/products'
    },
    {
      title: 'Infrastructures',
      route: '/retisal/infrastructures'
    }
  ]

  constructor(private router : Router) {
  }

  goToSection(name: string){
    this.router.navigate(['resital', name]);
  }
}
