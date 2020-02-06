import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarItemsComponent } from './components/sidebar-items/sidebar-items.component';
import { SigninComponent } from './components/signin/signin.component';
import { AntDesignModule } from '../ant-design.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SidebarItemsComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    AntDesignModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SidebarItemsComponent,
    SigninComponent,
    AntDesignModule
  ]
})
export class SharedModule { }
