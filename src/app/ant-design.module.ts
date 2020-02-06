import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NzInputModule,
  NzFormModule,
  NzButtonModule,
  NzCardModule,
  NzLayoutModule,
  NzMenuModule,
  NzIconModule,
  NzGridModule,
  NzAvatarModule,
} from 'ng-zorro-antd';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    NzCardModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzAvatarModule
  ],
  exports: [
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    NzCardModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzAvatarModule
  ]
})
export class AntDesignModule { }
