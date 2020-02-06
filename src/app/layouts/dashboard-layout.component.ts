import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  template: `
  <nz-layout>
    <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed" nzWidth="200px" [nzTrigger]="null">
        <app-shared-components-sidebar></app-shared-components-sidebar>
    </nz-sider>
        <nz-layout>
            <nz-header>
            <div nz-row>
              <div nz-col nzSpan="2">
                <i
                class="trigger"
                nz-icon
                [nzType]="isCollapsed ? 'menu-unfold' : 'menu-fold'"
                (click)="isCollapsed = !isCollapsed"
                ></i>
              </div>
              <div nz-col nzSpan="10">
                <app-shared-components-header></app-shared-components-header>
              </div>
            </div>
            </nz-header>
            <nz-content>
                <router-outlet></router-outlet>
            </nz-content>
            <nz-footer>
                <app-shared-components-footer></app-shared-components-footer>
            </nz-footer>
        </nz-layout>
  </nz-layout>
  `,
  styles: [
    `
    :host {
      text-align: center;
    }

    nz-header,
    nz-footer {
      color: #fff;
    }

    nz-footer {
      line-height: 1.5;
    }

    nz-sider {
      color: #fff;
      line-height: 120px;
      height: 100vh;
    }

    nz-content {
      color: #fff;
      min-height: 120px;
      line-height: 120px;
    }

    nz-layout {
      margin-bottom: 48px;
    }

    nz-layout:last-child {
      margin: 0;
    }
  `
  ]
})
export class DashboardLayoutComponent {
  isCollapsed = false;
}
