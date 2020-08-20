import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.sass']
})
export class LogoComponent implements OnInit {
  public logoPath = 'assets/logo/angular.png';

  constructor() { }

  public ngOnInit(): void {
  }

}
