import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-components-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  
  constructor() { }

  ngOnInit() {
  }

}
