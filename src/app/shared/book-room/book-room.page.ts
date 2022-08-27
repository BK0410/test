import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { BookRoomConstants, LoginConstants } from '../constants';
@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.page.html',
  styleUrls: ['./book-room.page.scss'],
})
export class BookRoomPage implements OnInit {
  value: number = 0;
  highValue: number = 0;
  logo = LoginConstants.imgPath.logo;
  carouselImg2 = LoginConstants.imgPath.carouselImg2;
  timeOptions = BookRoomConstants.timeOptions;
  fromTimeSelected: string | null = '';
  toTimeSelected: string | null = '';
  bookedSuccess: boolean = false;
  dateSelected: string | null | undefined;
  daySelected: string | null = '';

  constructor() {}

  ngOnInit() {}

  onValueChange(value: number) {
    this.fromTimeSelected = this.timeOptions[value];
    // if (this.participantEmails.length > 0) {
    //   this.checkUserAvailability();
    // }
  }

  onHighValueChange(value: number) {
    this.toTimeSelected = this.timeOptions[value];
    // if (this.participantEmails.length > 0) {
    //   this.checkUserAvailability();
    // }
  }

  dayPickerChange(date: any) {
    // this.daySelected = this.datePipe.transform(date, 'd MMMM y, EEEE');
    // this.dateSelected = this.datePipe.transform(date, 'yyyy-MM-dd');
    // if (this.participantEmails.length > 0) {
    //   this.checkUserAvailability();
    // }
  }

  fromTimePickerChange(time: any) {
    this.fromTimeSelected = time.target.value;
    this.timeOptions.forEach((option, index) => {
      if (option === this.fromTimeSelected) {
        this.toTimeSelected = this.timeOptions[index + 1];
      }
    });
    this.value = this.timeOptions.indexOf(this.fromTimeSelected!);
    // if (this.participantEmails.length > 0) {
    //   this.checkUserAvailability();
    // }
  }

  toTimePickerChange(time: any) {
    this.toTimeSelected = time.target.value;
    if (
      this.timeOptions.indexOf(this.toTimeSelected!) <=
      this.timeOptions.indexOf(this.fromTimeSelected!)
    ) {
      this.toTimeSelected =
        this.timeOptions[this.timeOptions.indexOf(this.fromTimeSelected!) + 1];
    }

    this.highValue = this.timeOptions.indexOf(this.toTimeSelected!);
    // if (this.participantEmails.length > 0) {
    //   this.checkUserAvailability();
    // }
  }

  options: Options = {
    floor: 0,
    ceil: this.timeOptions.length - 1,
    step: 1,
    showTicks: true,
    translate: (value: number): string => {
      return this.timeOptions[value];
    },
  };
}
