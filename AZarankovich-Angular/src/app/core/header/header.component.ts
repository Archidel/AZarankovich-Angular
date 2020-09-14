import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../service/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(public authorizationService: AuthorizationService) {
  }

  public ngOnInit(): void {
  }

}
