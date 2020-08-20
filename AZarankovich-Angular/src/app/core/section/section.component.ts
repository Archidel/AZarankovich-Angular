import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass']
})
export class SectionComponent implements OnInit {
  public searchValue: string;

  constructor() { }

  public ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public searchHandler() {
    console.log(this.searchValue);
  }
}
