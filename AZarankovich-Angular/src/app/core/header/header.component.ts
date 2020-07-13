import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  logoPath:string = "assets/logo/angular.png";

  constructor() { }

  ngOnInit(): void {
  }

}
