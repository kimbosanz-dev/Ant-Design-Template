import { Component, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-shared-components-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private adalSvc: MsAdalAngular6Service) { }

  ngOnInit() {
  }

  onLoggedOut() {
    this.adalSvc.logout();
  }
}
