import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})
export class LogoComponent implements OnInit {
  logoPath:string = "assets/logo/angular.png";

  constructor() { }

  ngOnInit(): void {
  }

}
