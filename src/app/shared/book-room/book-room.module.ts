import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { BookRoomPageRoutingModule } from './book-room-routing.module';
import { MaterialModule } from 'src/material.module';
import { BookRoomPage } from './book-room.page';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  imports: [
    MaterialModule,
    NgxSliderModule,
    CommonModule,
    FormsModule,
    IonicModule,
    BookRoomPageRoutingModule,
  ],
  declarations: [BookRoomPage],
})
export class BookRoomPageModule {}
